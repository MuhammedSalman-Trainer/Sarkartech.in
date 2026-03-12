import './Brand.css'

export default function Brand({ variant = 'default' }) {
  return (
    <div className={`brand brand--${variant}`}>
      <img
        src="/logo-crescent.png"
        alt=""
        className="brand-mark"
        aria-hidden="true"
      />
      <span className="brand-name">sarkartech.in</span>
    </div>
  )
}

