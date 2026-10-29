const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

const output = path.join(__dirname, "..", "public", "efua-mensah-cv.pdf");
fs.mkdirSync(path.dirname(output), { recursive: true });

const doc = new PDFDocument({ size: "A4", margin: 48 });
const stream = fs.createWriteStream(output);
doc.pipe(stream);

const navy = "#0c1428";
const blue = "#3a5bff";
const ink = "#172033";
const muted = "#3d4860";
const sun = "#ffc83a";

doc.rect(0, 0, 595.28, 118).fill(navy);
doc.rect(0, 118, 595.28, 6).fill(sun);

doc.fillColor("#ffffff").font("Helvetica-Bold").fontSize(26).text("Efua Mensah", 48, 32);
doc.font("Helvetica").fontSize(11).fillColor("#d5dcf0").text("Founder, PixelForge  ·  Web designer and front-end developer", 48, 64);
doc.fontSize(9).fillColor("#ffffff").text("No. 12 Lagos Avenue, East Legon, Accra, Ghana", 48, 84);
doc.text("hello@pixelforge.studio   ·   0256 206 383   ·   055 314 0985", 48, 98);

function heading(label) {
  doc.moveDown(1.1);
  doc.fillColor(blue).font("Helvetica-Bold").fontSize(12).text(label.toUpperCase(), 48, doc.y, { characterSpacing: 0.6 });
  const y = doc.y + 2;
  doc.moveTo(48, y).lineTo(547, y).strokeColor("#e4eaf5").lineWidth(1).stroke();
  doc.moveDown(0.6);
}

doc.y = 140;
doc.fillColor(ink).font("Helvetica-Bold").fontSize(12).text("Profile", 48);
doc.moveDown(0.4);
doc
  .font("Helvetica")
  .fontSize(10)
  .fillColor(muted)
  .text(
    "I design and build websites for Ghanaian brands from a studio in East Legon, Accra. The work covers marketing sites, catalogues, menus, and professional pages, usually in Next.js, TypeScript, and Tailwind CSS. I studied Information Technology at the University of Ghana and spent four years in Accra studios before founding PixelForge in 2022. I work in English and Twi.",
    { width: 499, lineGap: 2 },
  );

heading("Selected skills");
doc
  .font("Helvetica")
  .fontSize(10)
  .fillColor(ink)
  .text(
    "Interface design  ·  HTML and CSS  ·  TypeScript  ·  React and Next.js  ·  Tailwind CSS  ·  Figma  ·  Brand identity  ·  Content structure",
    { width: 499, lineGap: 2 },
  );

heading("Experience");

const roles = [
  [
    "Founder and lead developer — PixelForge, East Legon",
    "2022 — Present",
    "Design and build websites for Accra businesses, from the first shop visit to launch. Recent work includes a florist shop in Osu, a creative studio in Cantonments, and a class timetable for a wellness studio in Labone.",
  ],
  [
    "UI developer — Northstar Digital, Airport City",
    "2019 — 2022",
    "Built marketing sites and design-system components for hotels, professional firms, and NGOs. Led the front end of a donor portal used by teams across Greater Accra.",
  ],
  [
    "Junior designer — Bloom & Co. Studio, Osu",
    "2018 — 2019",
    "Designed product pages, lookbooks, and the first client websites I both designed and coded.",
  ],
];

roles.forEach(([title, dates, detail]) => {
  const start = doc.y;
  doc.font("Helvetica-Bold").fontSize(11).fillColor(ink).text(title, 48, start, { width: 370 });
  const afterTitle = doc.y;
  doc.font("Helvetica").fontSize(10).fillColor(blue).text(dates, 430, start, { width: 117, align: "right" });
  doc.y = Math.max(afterTitle, doc.y) + 4;
  doc.font("Helvetica").fontSize(10).fillColor(muted).text(detail, 48, doc.y, { width: 499, lineGap: 1 });
  doc.moveDown(0.7);
});

heading("Education");
const eduStart = doc.y;
doc.font("Helvetica-Bold").fontSize(11).fillColor(ink).text("BSc Information Technology — University of Ghana, Legon", 48, eduStart, { width: 370 });
const afterEdu = doc.y;
doc.font("Helvetica").fontSize(10).fillColor(blue).text("2014 — 2018", 430, eduStart, { width: 117, align: "right" });
doc.y = Math.max(afterEdu, doc.y) + 4;
doc
  .font("Helvetica")
  .fontSize(10)
  .fillColor(muted)
  .text(
    "Interactive systems, databases, and visual communication. Final project: a directory of independent makers working in Accra.",
    { width: 499 },
  );

heading("Contact");
doc
  .font("Helvetica")
  .fontSize(10)
  .fillColor(ink)
  .text("hello@pixelforge.studio    ·    0256 206 383    ·    055 314 0985    ·    Mon–Fri, 8:00 AM – 6:00 PM GMT", {
    width: 499,
  });

doc.end();

stream.on("finish", () => {
  console.log("Wrote", output);
});
