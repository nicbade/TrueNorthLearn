import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function NotFoundPage() {
  useEffect(() => {
    document.title = 'Page not found | True North Accessibility'
  }, [])

  return (
    <div className="page">
      <Header />
      <main id="main-content" className="main container" tabIndex={-1}>
        <h1>Page not found</h1>
        <p>That URL doesn&apos;t match a page in the Training Library.</p>
        <p>
          <Link to="/">Return to the Training Library</Link>
        </p>
      </main>
      <Footer />
    </div>
  )
}
