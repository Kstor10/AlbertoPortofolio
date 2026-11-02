import { cp, mkdir, readFile, realpath, rm, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { dirname, join, relative, resolve, sep } from "node:path";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";

// Astro startup stalls in the workspace directory on this Windows setup.
// Compile an isolated copy in the temporary directory, which has been verified.
const source = await realpath(resolve(dirname(fileURLToPath(import.meta.url)), ".."));
const action = process.argv[2] ?? "preview";
if (!["build", "preview"].includes(action)) throw new Error("Use npm run local or npm run local:build.");
const sourceId = createHash("sha256").update(source).digest("hex").slice(0, 12);
const cache = join(tmpdir(), `portfolio-alberto-${sourceId}`);
await mkdir(cache, { recursive: true });
const cacheReal = await realpath(cache);
if (cacheReal.toLowerCase() !== resolve(cache).toLowerCase()) throw new Error("Unexpected cache location.");
const marker = join(cache, ".portfolio-source");
const previousSource = await readFile(marker, "utf8").catch(() => null);
if (previousSource !== null && previousSource !== source) throw new Error("This cache belongs to another project.");
await writeFile(marker, source);

// Only these generated subfolders of our marked cache can be replaced.
for (const name of ["src", "public", "scripts", "dist", ".astro"]) {
  const destination = resolve(cache, name);
  const inside = relative(cacheReal, destination);
  if (!inside || inside.startsWith(`..${sep}`) || inside === ".." || dirname(destination) !== cacheReal) {
    throw new Error("Refusing to replace a path outside the portfolio cache.");
  }
  await rm(destination, { recursive: true, force: true });
}
for (const name of ["src", "public", "scripts", "package.json", "package-lock.json", "astro.config.mjs", "tsconfig.json"]) {
  await cp(join(source, name), join(cache, name), { recursive: true });
}

function npm(args) {
  return new Promise((resolveRun, reject) => {
    // Every argument is selected by this script; no shell input comes from content.
    const child = process.platform === "win32"
      ? spawn("cmd.exe", ["/d", "/s", "/c", `npm ${args.join(" ")}`], { cwd: cache, stdio: "inherit", windowsHide: true })
      : spawn("npm", args, { cwd: cache, stdio: "inherit" });
    child.on("error", reject);
    child.on("exit", (code) => code === 0 ? resolveRun() : reject(new Error(`npm exited with code ${code}`)));
  });
}

const lockHash = createHash("sha256").update(await readFile(join(cache, "package-lock.json"))).digest("hex");
const installedHash = await readFile(join(cache, ".installed-lock"), "utf8").catch(() => "");
if (installedHash !== lockHash) {
  await npm(["ci"]);
  await writeFile(join(cache, ".installed-lock"), lockHash);
}
await npm(["run", "build"]);
await npm(["run", "verify"]);
console.log(`\nStatic files: ${join(cache, "dist")}`);
if (action === "preview") {
  console.log("Open http://127.0.0.1:4321/ — press Ctrl+C to stop. Rerun after editing the source.");
  await npm(["run", "preview", "--", "--host", "127.0.0.1", "--port", "4321"]);
}
