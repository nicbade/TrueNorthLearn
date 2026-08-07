import { Link } from 'react-router-dom'

export default function TrainingCard({ training }) {
  const { slug, title, description, duration, difficulty } = training

  return (
    <article className="training-card">
      <div className="training-card__meta">
        <span className="training-card__difficulty">{difficulty}</span>
        <span className="training-card__duration">
          <span className="visually-hidden">Estimated duration: </span>
          {duration}
        </span>
      </div>
      <h2 className="training-card__title">
        <Link to={`/training/${slug}`}>{title}</Link>
      </h2>
      <p className="training-card__description">{description}</p>
      <Link className="training-card__cta" to={`/training/${slug}`}>
        Start training
        <span className="visually-hidden">: {title}</span>
      </Link>
    </article>
  )
}
