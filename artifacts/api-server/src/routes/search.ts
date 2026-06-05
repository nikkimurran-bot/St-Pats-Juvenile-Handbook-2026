import { Router } from "express";
import { searchIndex } from "../data/searchIndex";

const router = Router();

router.get("/search", (req, res) => {
  const q = typeof req.query.q === "string" ? req.query.q.trim() : "";

  if (!q || q.length < 2) {
    res.json({ query: q, results: [] });
    return;
  }

  const lower = q.toLowerCase();
  const seen = new Set<string>();
  const results: Array<{
    sectionId: string;
    sectionNumber: string;
    sectionTitle: string;
    subsectionId: string;
    subsectionNumber: string;
    subsectionTitle: string;
    excerpt: string;
  }> = [];

  for (const entry of searchIndex) {
    const haystack = (entry.subsectionTitle + " " + entry.text).toLowerCase();
    if (!haystack.includes(lower)) continue;
    if (seen.has(entry.subsectionId)) continue;
    seen.add(entry.subsectionId);

    const idx = haystack.indexOf(lower);
    const start = Math.max(0, idx - 80);
    const end = Math.min(entry.text.length, idx + 160);
    const excerpt = (start > 0 ? "..." : "") + entry.text.slice(start, end).trim() + (end < entry.text.length ? "..." : "");

    results.push({
      sectionId: entry.sectionId,
      sectionNumber: entry.sectionNumber,
      sectionTitle: entry.sectionTitle,
      subsectionId: entry.subsectionId,
      subsectionNumber: entry.subsectionNumber,
      subsectionTitle: entry.subsectionTitle,
      excerpt
    });

    if (results.length >= 15) break;
  }

  res.json({ query: q, results });
});

export default router;
