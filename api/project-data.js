import { put, list } from '@vercel/blob';

const BLOB_PATH = 'settings/projects-data.json';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'GET') {
    try {
      const { blobs } = await list({ prefix: BLOB_PATH, limit: 1 });
      if (!blobs.length) {
        res.status(200).json(null);
        return;
      }
      const blob = blobs[0];
      const response = await fetch(blob.url);
      if (!response.ok) {
        res.status(500).json({ error: 'Failed to read project data' });
        return;
      }
      const json = await response.json();
      res.status(200).json(json);
    } catch (e) {
      res.status(500).json({ error: 'Failed to load project data' });
    }
    return;
  }

  if (req.method === 'POST') {
    try {
      const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body;
      if (!body || typeof body !== 'object') {
        res.status(400).json({ error: 'Invalid body' });
        return;
      }
      await put(BLOB_PATH, JSON.stringify(body), {
        access: 'public',
        addRandomSuffix: false,
        contentType: 'application/json',
      });
      res.status(200).json({ ok: true });
    } catch (e) {
      res.status(500).json({ error: 'Failed to save project data' });
    }
    return;
  }

  res.status(405).json({ error: 'Method Not Allowed' });
}

