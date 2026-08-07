import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TrainingCard from '../components/TrainingCard'
import { trainings } from '../trainings'

export default function HubPage() {
  useEffect(() => {
    document.title = 'Accessibility Training Library | True North Accessibility'
  }, [])

  return (
    <div className="page page--hub">
      <Header />

      <main id="main-content" className="main" tabIndex={-1}>
        <div className="container">
          <header className="page-intro">
            <p className="eyebrow">TrueNorth Accessibility</p>
            <h1 className="page-intro__title">Accessibility Training Library</h1>
            <p className="page-intro__lede">
              Self-paced modules for teams building inclusive digital products.
              Start a training below — each module opens in its own guided
              learning environment.
            </p>
          </header>

          {trainings.length === 0 ? (
            <p className="empty-state" role="status">
              No trainings are published yet. Check back soon.
            </p>
          ) : (
            <ul className="training-grid" aria-label="Available trainings">
              {trainings.map((training) => (
                <li key={training.slug}>
                  <TrainingCard training={training} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
