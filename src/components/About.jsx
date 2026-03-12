import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">What we do</h2>
      <p className="section-subtitle">
        From idea to production with AI-enhanced development.
      </p>
      <div className="about-cards">
        <div className="about-card">
          <span className="about-icon" aria-hidden="true">◆</span>
          <h3>Ideas → Apps</h3>
          <p>We convert cool ideas into useful web applications. Your concept becomes a real product.</p>
        </div>
        <div className="about-card">
          <span className="about-icon" aria-hidden="true">⚡</span>
          <h3>AI-enhanced coding</h3>
          <p>Real-world projects built with AI-enhanced coding—faster than the world has ever seen.</p>
        </div>
        <div className="about-card">
          <span className="about-icon" aria-hidden="true">🏆</span>
          <h3>Hackathons & rewards</h3>
          <p>We run hackathons to collect ideas and reward students. Share your idea and get recognized.</p>
        </div>
      </div>
    </section>
  )
}
