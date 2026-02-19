// Minimal local upload server for development (no external deps)
// Serves POST /api/blob-upload and GET /uploads/:filename at http://localhost:3001
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const UPLOAD_DIR = path.join(__dirname, 'uploads');
fs.mkdirSync(UPLOAD_DIR, { recursive: true });

function sanitize(name) {
  return (name || `upload-${Date.now()}`).replace(/[^\w.\-]/g, '_');
}

const server = http.createServer((req, res) => {
  // CORS for local dev
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-filename');
  if (req.method === 'OPTIONS') { res.writeHead(204); return res.end(); }

  if (req.method === 'POST' && req.url === '/api/blob-upload') {
    const filenameHeader = req.headers['x-filename'];
    const filename = sanitize(Array.isArray(filenameHeader) ? filenameHeader[0] : filenameHeader);
    const dest = path.join(UPLOAD_DIR, filename);
    const ws = fs.createWriteStream(dest);
    req.pipe(ws);
    ws.on('finish', () => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ url: `http://localhost:3001/uploads/${encodeURIComponent(filename)}` }));
    });
    ws.on('error', (e) => {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: e?.message || 'write failed' }));
    });
    return;
  }

  if (req.method === 'GET' && req.url?.startsWith('/uploads/')) {
    const name = sanitize(decodeURIComponent(req.url.replace('/uploads/', '')));
    const filePath = path.join(UPLOAD_DIR, name);
    if (!fs.existsSync(filePath)) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      return res.end('Not Found');
    }
    const ext = path.extname(filePath).toLowerCase();
    const mime = {
      '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png',
      '.webp': 'image/webp', '.gif': 'image/gif', '.svg': 'image/svg+xml'
    }[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': mime });
    fs.createReadStream(filePath).pipe(res);
    return;
  }

  if (req.method === 'GET') {
    const urlPath = (req.url || '/').split('?')[0] || '/';
    const safePath = urlPath === '/' ? '/index.html' : urlPath;
    const filePath = path.join(__dirname, decodeURIComponent(safePath.replace(/^\/+/, '')));
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      const mime =
        {
          '.html': 'text/html; charset=utf-8',
          '.css': 'text/css; charset=utf-8',
          '.js': 'text/javascript; charset=utf-8',
          '.json': 'application/json; charset=utf-8',
          '.png': 'image/png',
          '.jpg': 'image/jpeg',
          '.jpeg': 'image/jpeg',
          '.webp': 'image/webp',
          '.svg': 'image/svg+xml'
        }[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': mime });
      fs.createReadStream(filePath).pipe(res);
      return;
    }
  }

  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Not Found');
});

const PORT = 3001;
server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Local upload server listening at http://localhost:${PORT}`);
});
