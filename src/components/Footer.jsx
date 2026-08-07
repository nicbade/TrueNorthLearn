export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <p className="site-footer__name">TrueNorth Accessibility LLC</p>
          <p className="site-footer__note">
            Digital accessibility consulting, auditing, and training.
          </p>
        </div>
        <nav className="site-footer__nav" aria-label="Footer">
          <a href="https://truenorth-accessibility.com">Main site</a>
          <a href="https://truenorth-accessibility.com/contact">Contact</a>
          <a href="mailto:truenorth.accessibilityllc@gmail.com">
            truenorth.accessibilityllc@gmail.com
          </a>
        </nav>
        <p className="site-footer__copy">
          &copy; {year} TrueNorth Accessibility LLC. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
