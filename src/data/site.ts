import profileData from "./profile.json";

export const profile = profileData;

export const ui = {
  es: {
    locale: "es",
    langName: "ES",
    otherLang: "EN",
    homePath: "/",
    otherPath: "/en/",
    projectsLabel: "Proyectos",
    aboutLabel: "Perfil",
    educationLabel: "Formación",
    projectsPath: "/proyectos/",
    aboutPath: "/sobre-mi/",
    educationPath: "/formacion/",
    contactLabel: "Contacto",
    cvLabel: "Descargar CV",
    cvPath: "/cv-luis-alberto-davalos-es.pdf",
    githubLabel: "GitHub",
    navLabel: "Navegación principal",
    menuLabel: "Abrir navegación",
    privacy: "Solo se publica información profesional esencial.",
    skip: "Saltar al contenido",
  },
  en: {
    locale: "en",
    langName: "EN",
    otherLang: "ES",
    homePath: "/en/",
    otherPath: "/",
    projectsLabel: "Projects",
    aboutLabel: "Profile",
    educationLabel: "Education",
    projectsPath: "/en/projects/",
    aboutPath: "/en/about/",
    educationPath: "/en/education/",
    contactLabel: "Contact",
    cvLabel: "Download résumé",
    cvPath: "/cv-luis-alberto-davalos-en.pdf",
    githubLabel: "GitHub",
    navLabel: "Primary navigation",
    menuLabel: "Open navigation",
    privacy: "Only essential professional information is published.",
    skip: "Skip to content",
  },
} as const;

export type Locale = keyof typeof ui;
