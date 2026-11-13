import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

const GA_MEASUREMENT_ID = 'G-N3Y8MZNQD2'
let gaScriptInstalled = false

function installGoogleAnalytics() {
  if (gaScriptInstalled) return
  gaScriptInstalled = true

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)
}

export default function PageViewTracker() {
  const location = useLocation()
  const isFirstView = useRef(true)

  useEffect(() => {
    const pagePath = `${location.pathname}${location.search}`
    const timeoutId = window.setTimeout(() => {
      if (isFirstView.current) {
        isFirstView.current = false
        // The Google tag sends the first page view when it loads. The title
        // is already set, so that hit uses the current page.
        installGoogleAnalytics()
        return
      }

      if (typeof window.gtag !== 'function') return
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: `${window.location.origin}${pagePath}`,
        page_path: pagePath,
      })
    }, 0)

    return () => window.clearTimeout(timeoutId)
  }, [location.pathname, location.search])

  return null
}
