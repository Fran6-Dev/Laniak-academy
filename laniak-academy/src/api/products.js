// ─────────────────────────────────────────────
// CATALOGUE — modifie uniquement les prix ici
// ─────────────────────────────────────────────
const products = {
  'laniak-product-1': {
    id: 'laniak-product-1',
    name: 'Produit 1',       // optionnel, pour lisibilité
    price: 29.99,            // ← modifie le prix ici
    url: '/api/products',
  },
  'laniak-product-2': {
    id: 'laniak-product-2',
    name: 'Produit 2',
    price: 34.99,            // ← modifie le prix ici
    url: '/api/products',
  },
  'laniak-product-3': {
    id: 'laniak-product-3',
    name: 'Produit 3',
    price: 24.99,            // ← modifie le prix ici
    url: '/api/products',
  },
  'laniak-product-4': {
    id: 'laniak-product-4',
    name: 'Produit 4',
    price: 39.99,            // ← modifie le prix ici
    url: '/api/products',
  },
  'laniak-product-5': {
    id: 'laniak-product-5',
    name: 'Produit 5',
    price: 19.99,            // ← modifie le prix ici
    url: '/api/products',
  },
  'laniak-product-6': {
    id: 'laniak-product-6',
    name: 'Produit 6',
    price: 44.99,            // ← modifie le prix ici
    url: '/api/products',
  },
}

export default function handler(req, res) {
  const { id } = req.query

  if (!id) {
    return res.status(400).json({ error: 'Missing product id' })
  }

  const product = products[id]

  if (!product) {
    return res.status(404).json({ error: `Product "${id}" not found` })
  }

  // Format attendu par Snipcart pour la validation
  return res.status(200).json({
    id: product.id,
    price: product.price,
    url: product.url,
    name: product.name,
  })
}