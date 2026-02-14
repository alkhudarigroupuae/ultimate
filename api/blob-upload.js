// Minimal Vercel Serverless Function for uploading to Vercel Blob
// Requires @vercel/blob and a Vercel project with Blob enabled
import { put } from '@vercel/blob';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }
  try {
    const filenameHeader = req.headers['x-filename'];
    const safeName = Array.isArray(filenameHeader) ? filenameHeader[0] : filenameHeader;
    const filename = (safeName || `upload-${Date.now()}`).replace(/[^\w.\-]/g, '_');
    const blob = await put(`uploads/${filename}`, req, {
      access: 'public',
    });
    res.status(200).json({ url: blob.url });
  } catch (e) {
    res.status(500).json({ error: e?.message || 'Upload failed' });
  }
}
