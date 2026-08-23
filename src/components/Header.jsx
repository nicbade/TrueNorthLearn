import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="site-header" role="banner">
      <div className="site-header__inner">
        <a
          href="https://truenorth-accessibility.com"
          className="brand"
          aria-label="TrueNorth Accessibility home"
        >
          <span className="brand__mark" aria-hidden="true">
            <svg
              className="brand-mark"
              viewBox="0 0 40 40"
              width="40"
              height="40"
              focusable="false"
            >
              <circle className="brand-mark__circle" cx="20" cy="20" r="18" />
              <path
                className="brand-mark__star"
                d="M20 6 L23 16 L33 20 L23 24 L20 34 L17 24 L7 20 L17 16 Z"
              />
              <circle className="brand-mark__center" cx="20" cy="20" r="2.5" />
            </svg>
          </span>
          <span className="brand__text" aria-hidden="true">
            <span className="brand__name">TrueNorth</span>
            <span className="brand__tag">Accessibility</span>
          </span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          <a
            className="site-nav__link"
            href="https://truenorth-accessibility.com"
          >
            Main site
          </a>
          <Link className="site-nav__link site-nav__link--current" to="/" aria-current="page">
            Training Library
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
