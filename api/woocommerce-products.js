export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const urlMeta = new URL(req.url, 'http://localhost');
  const project = urlMeta.searchParams.get('project') || 'store';

  const base = process.env.WOO_BASE_URL;
  const key = process.env.WOO_CONSUMER_KEY;
  const secret = process.env.WOO_CONSUMER_SECRET;

  if (!base || !key || !secret) {
    res.status(500).json({ error: 'WooCommerce API is not configured' });
    return;
  }

  try {
    const url = new URL('/wp-json/wc/v3/products', base);
    url.searchParams.set('per_page', '100');
    url.searchParams.set('status', 'publish');
    url.searchParams.set('consumer_key', key);
    url.searchParams.set('consumer_secret', secret);

    let categoryId = null;
    if (project === 'restocafe') {
      categoryId = process.env.WOO_RESTO_CATEGORY_ID || null;
    } else if (project === 'store') {
      categoryId = process.env.WOO_STORE_CATEGORY_ID || null;
    } else if (project === 'fitness') {
      categoryId = process.env.WOO_FITNESS_CATEGORY_ID || null;
    } else if (project === 'barber') {
      categoryId = process.env.WOO_BARBER_CATEGORY_ID || null;
    }
    if (categoryId) {
      url.searchParams.set('category', categoryId);
    }

    const response = await fetch(url.toString());
    if (!response.ok) {
      res.status(502).json({ error: 'Failed to fetch products from WooCommerce' });
      return;
    }

    const products = await response.json();

    const mapped = Array.isArray(products)
      ? products.map((p) => {
          const image =
            Array.isArray(p.images) && p.images.length && p.images[0].src
              ? p.images[0].src
              : '';
          const category =
            Array.isArray(p.categories) && p.categories.length && p.categories[0].name
              ? p.categories[0].name
              : '';
          const priceValue =
            typeof p.price === 'string' && p.price.trim().length
              ? parseFloat(p.price)
              : typeof p.regular_price === 'string' && p.regular_price.trim().length
              ? parseFloat(p.regular_price)
              : 0;

          return {
            id: p.id,
            name: p.name || '',
            price: Number.isFinite(priceValue) ? priceValue : 0,
            image,
            category,
          };
        })
      : [];

    if (project === 'restocafe') {
      res.status(200).json({ restocafe: { products: mapped } });
    } else if (project === 'fitness') {
      res.status(200).json({ fitness: { products: mapped } });
    } else if (project === 'barber') {
      res.status(200).json({ barber: { services: mapped } });
    } else {
      res.status(200).json({ store: { products: mapped } });
    }
  } catch (e) {
    res.status(500).json({ error: 'Unexpected error while contacting WooCommerce' });
  }
}
