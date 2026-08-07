import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getTrainingBySlug } from '../trainings'

export default function TrainingPage() {
  const { slug } = useParams()
  const training = getTrainingBySlug(slug)

  useEffect(() => {
    if (training) {
      document.title = `${training.title} | True North Accessibility`
    } else {
      document.title = 'Training not found | True North Accessibility'
    }
  }, [training])

  if (!training) {
    return (
      <div className="page page--training-missing">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <header className="training-bar" role="banner">
          <div className="training-bar__inner">
            <Link to="/" className="training-bar__back">
              ← Back to Library
            </Link>
          </div>
        </header>
        <main id="main-content" className="main container" tabIndex={-1}>
          <h1>Training not found</h1>
          <p>
            We couldn&apos;t find a training for{' '}
            <code>{slug}</code>. It may have been moved or removed.
          </p>
          <p>
            <Link to="/">Return to the Training Library</Link>
          </p>
        </main>
      </div>
    )
  }

  return (
    <div className="page page--training">
      <header className="training-bar" role="banner">
        <div className="training-bar__inner">
          <Link to="/" className="training-bar__back">
            ← Back to Library
          </Link>
          <p className="training-bar__title">
            <span className="visually-hidden">Current training: </span>
            {training.title}
          </p>
        </div>
      </header>

      <main id="main-content" className="training-frame-wrap" tabIndex={-1}>
        <iframe
          className="training-frame"
          src={training.embedUrl}
          title={`${training.title} — interactive training module`}
          allow="fullscreen"
        />
      </main>
    </div>
  )
}
