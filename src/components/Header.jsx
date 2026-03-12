import './Header.css'
import Brand from './Brand'

export default function Header() {
  return (
    <header className="header">
      <a href="/" className="header-logo" aria-label="SarkarTech Home">
        <Brand />
      </a>
      <nav className="header-nav">
        <a href="#about">About</a>
        <a href="#hackathons">Hackathons</a>
        <a href="#products">Products</a>
        <a href="#submit-idea">Submit Ideas</a>
      </nav>
    </header>
  )
}
