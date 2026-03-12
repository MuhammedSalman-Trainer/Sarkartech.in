import './Products.css'

const PRODUCTS = [
  {
    name: 'SkillVantix Practice',
    url: 'https://practice.skillvantix.com',
    description: 'Practice platform for skills and assessments.',
    preview: 'https://placehold.co/600x340/12141c/00d4aa?text=practice.skillvantix.com',
  },
]

export default function Products() {
  return (
    <section id="products" className="products">
      <h2 className="section-title">Explore our existing products</h2>
      <p className="section-subtitle">
        See what we’ve built so far.
      </p>
      <div className="products-grid">
        {PRODUCTS.map((product) => (
          <a
            key={product.url}
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="product-card"
          >
            <div className="product-preview">
              <img src={product.preview} alt="" />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span className="product-link">{product.url.replace(/^https?:\/\//, '')} ↗</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
