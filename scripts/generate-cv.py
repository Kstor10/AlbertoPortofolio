"""Render both public PDFs from the same verified data as the website.

Requires ReportLab and pypdf. This is an optional editorial tool, not a
dependency of the website or its deployment. No original private CV is copied.
"""
import json
import re
import argparse
from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parent.parent
parser = argparse.ArgumentParser()
parser.add_argument("--output-dir", type=Path, default=ROOT / "public")
OUTPUT = parser.parse_args().output_dir
OUTPUT.mkdir(parents=True, exist_ok=True)
DATA = json.loads((ROOT / "src/data/cv.json").read_text(encoding="utf-8"))
PROFILE = json.loads((ROOT / "src/data/profile.json").read_text(encoding="utf-8"))
FONTS = Path("C:/Windows/Fonts")
pdfmetrics.registerFont(TTFont("CV", str(FONTS / "segoeui.ttf")))
pdfmetrics.registerFont(TTFont("CVBold", str(FONTS / "segoeuib.ttf")))
pdfmetrics.registerFontFamily("CV", normal="CV", bold="CVBold")
INK = colors.HexColor("#1e293b")
ACID = colors.HexColor("#bfdbfe")
MUTED = colors.HexColor("#50534b")
WIDTH, HEIGHT = A4


def render(locale, copy):
    destination = OUTPUT / f"cv-luis-alberto-davalos-{locale}.pdf"
    pdf = canvas.Canvas(str(destination), pagesize=A4, pageCompression=1)
    pdf.setTitle(f"{PROFILE['fullName']} — {copy['title']}")
    pdf.setAuthor(PROFILE["fullName"])
    pdf.setSubject(copy["role"])

    def paragraph(text, x, y, width, size=9, color=INK, bold=False, leading=None):
        style = ParagraphStyle("cv", fontName="CVBold" if bold else "CV",
                               fontSize=size, leading=leading or size * 1.42,
                               textColor=color)
        block = Paragraph(escape(text), style)
        _, height = block.wrap(width, HEIGHT)
        if y - height < 40:
            raise ValueError(f"CV {locale} exceeds one page; edit spacing or content.")
        block.drawOn(pdf, x, y - height)
        return y - height

    def heading(text, x, y, width):
        y = paragraph(text.upper(), x, y, width, size=8, bold=True)
        pdf.setStrokeColor(colors.HexColor("#d8d9d2"))
        pdf.line(x, y - 5, x + width, y - 5)
        return y - 17

    pdf.setFillColor(INK)
    pdf.rect(0, HEIGHT - 202, WIDTH, 202, fill=1, stroke=0)
    y = paragraph(copy["role"].upper(), 32, HEIGHT - 28, WIDTH - 64, 9, ACID, True)
    y = paragraph(PROFILE["fullName"], 32, y - 13, WIDTH - 64, 30, colors.white, True, 34)
    y = paragraph(copy["summary"], 32, y - 13, WIDTH - 64, 9, colors.HexColor("#e0e2d9"))
    location = PROFILE["location"] if locale == "es" else PROFILE["locationEn"]
    contact = f"{location}   ·   {PROFILE['email']}   ·   github.com/Kstor10"
    paragraph(contact, 32, HEIGHT - 174, WIDTH - 64, 8, colors.white)
    pdf.linkURL(f"mailto:{PROFILE['email']}", (77, HEIGHT - 188, 254, HEIGHT - 173))
    pdf.linkURL(PROFILE["github"], (266, HEIGHT - 188, 399, HEIGHT - 173))

    left_x, left_w, right_x, right_w = 32, 315, 371, WIDTH - 403
    left = right = HEIGHT - 225
    left = heading(copy["experience"], left_x, left, left_w)
    left = paragraph(copy["job"], left_x, left, left_w, 10, bold=True)
    left = paragraph(f"{copy['company']} · {copy['dates']}", left_x, left - 3, left_w, 8.5, MUTED)
    for bullet in copy["jobBullets"]:
        left = paragraph(f"• {bullet}", left_x, left - 6, left_w, 8.5)
    left = heading(copy["selected"], left_x, left - 19, left_w)
    for title, body in copy["projects"]:
        left = paragraph(title, left_x, left, left_w, 9.5, bold=True)
        left = paragraph(body, left_x, left - 2, left_w, 8.5, MUTED) - 10
    left = heading(copy["skills"], left_x, left - 7, left_w)
    for title, body in copy["skillGroups"]:
        left = paragraph(f"{title}: {body}", left_x, left, left_w, 8, MUTED) - 6

    right = heading(copy["education"], right_x, right, right_w)
    for title, body in copy["educationItems"]:
        right = paragraph(title, right_x, right, right_w, 9, bold=True)
        right = paragraph(body, right_x, right - 3, right_w, 8, MUTED) - 12
    right = heading(copy["languages"], right_x, right - 10, right_w)
    right = paragraph(copy["languageCopy"], right_x, right, right_w, 9, MUTED)
    paragraph(copy["privacy"], right_x, right - 24, right_w, 8, MUTED)
    pdf.save()

    document = PdfReader(destination)
    text = "\n".join(page.extract_text() or "" for page in document.pages)
    assert len(document.pages) == 1, "The public CV must fit one A4 page."
    assert PROFILE["email"] in text
    assert not re.search(r"\+34[\s-]*[6789](?:[\s-]*\d){8}", text)
    assert "Power Apps" in text
    print(f"{destination.name}: 1 A4 page, public contact verified, {destination.stat().st_size} bytes")


for language, content in DATA.items():
    render(language, content)
