import './Footer.css'
import Brand from './Brand'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand" aria-label="SarkarTech">
          <Brand />
        </div>
        <p className="footer-tagline">
          Converting cool ideas into useful web applications!!
        </p>
        <a href="mailto:muhammed.salman@sarkartech.in" className="footer-email">
          muhammed.salman@sarkartech.in
        </a>
      </div>
    </footer>
  )
}
