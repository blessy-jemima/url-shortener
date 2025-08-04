import db from '../db/db.js';
import { generateShortId } from '../utils/generateShortId.js';

export const shortenUrl = (req, res) => {
  const { longUrl } = req.body;
  if (!longUrl) return res.status(400).json({ error: 'Long URL is required' });

  const shortId = generateShortId();

  db.run("INSERT INTO urls (shortId, longUrl) VALUES (?, ?)", [shortId, longUrl], function (err) {
    if (err) return res.status(500).json({ error: 'Database error' });
    res.json({ shortUrl: `http://localhost:5000/${shortId}` });
  });
};

export const redirectToLongUrl = (req, res) => {
  const { shortId } = req.params;
  db.get("SELECT longUrl FROM urls WHERE shortId = ?", [shortId], (err, row) => {
    if (err || !row) return res.status(404).json({ error: 'URL not found' });
    res.redirect(row.longUrl);
  });
};
