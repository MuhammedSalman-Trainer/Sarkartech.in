import './Hero.css'
import Brand from './Brand'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <Brand variant="hero" />
        <h1 className="hero-title">
          Cool ideas → <span className="hero-highlight">Useful web applications</span>
        </h1>
        <p className="hero-tagline">
          We turn your best ideas into real-world projects with AI-enhanced coding—
          building faster than ever. Join our hackathons, share your vision, and get rewarded.
        </p>
        <div className="hero-cta">
          <a href="#submit-idea" className="btn btn-primary">Submit your idea</a>
          <a href="#products" className="btn btn-secondary">Explore products</a>
        </div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="hero-grid" />
      </div>
    </section>
  )
}
