/*!
 * sitemap-index.js — MIT
 */
const fs = require("fs");
const OUT = "sitemap_index.xml";
const today = new Date().toISOString().slice(0,10);

// put your subdomain sitemaps here
const LIST = [
  "https://quietmoon.plnt.earth/sitemap.xml",
  "https://tunes.plnt.earth/sitemap.xml",
  "https://jar.plnt.earth/sitemap.xml",
  "https://honey.plnt.earth/sitemap.xml"
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${LIST.map(u => `  <sitemap><loc>${u}</loc><lastmod>${today}</lastmod></sitemap>`).join("\n")}
</sitemapindex>\n`;

fs.writeFileSync(OUT, xml, "utf8");
