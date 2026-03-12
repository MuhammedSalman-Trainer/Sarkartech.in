import './Hackathons.css'

export default function Hackathons() {
  return (
    <section id="hackathons" className="hackathons">
      <h2 className="section-title">Hackathons</h2>
      <p className="section-subtitle">
        We run hackathons to collect ideas for cool projects and reward students.
      </p>
      <div className="hackathons-content">
        <p>
          Have an idea that could become the next useful web app? Submit it through our form below.
          We use AI-enhanced coding to turn the best ideas into real projects at a pace the world hasn’t seen before.
          Students with winning ideas get recognized and rewarded.
        </p>
        <a href="#submit-idea" className="btn btn-primary">Submit your idea →</a>
      </div>
    </section>
  )
}
