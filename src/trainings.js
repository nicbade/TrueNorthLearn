/**
 * Training library catalog.
 *
 * To add a new training:
 * 1. Export the Figma Make module as a standalone HTML/React app
 * 2. Place it under public/modules/<slug>/ (or host it elsewhere)
 * 3. Add an object to this array — the hub and routes pick it up automatically
 *
 * Fields:
 * - slug        URL path segment (/training/<slug>)
 * - title       Card and page title
 * - description Short summary shown on the hub card
 * - duration    Estimated time (e.g. "45 min", "1.5 hours")
 * - difficulty  "Beginner" | "Intermediate" | "Advanced"
 * - embedUrl    Absolute URL or site-relative path to the module (iframe src)
 */
export const trainings = [
  {
    slug: 'intro-to-wcag',
    title: 'Introduction to WCAG 2.2',
    description:
      'Learn the structure of WCAG 2.2, the four POUR principles, and how to read success criteria for real product work.',
    duration: '45 min',
    difficulty: 'Beginner',
    embedUrl: '/modules/intro-to-wcag/index.html',
  },
  {
    slug: 'keyboard-and-focus',
    title: 'Keyboard Access & Focus',
    description:
      'Practice evaluating keyboard operability, focus order, and visible focus indicators against WCAG 2.4.3, 2.4.7, and 2.4.11.',
    duration: '60 min',
    difficulty: 'Intermediate',
    embedUrl: '/modules/keyboard-and-focus/index.html',
  },
  {
    slug: 'screen-reader-basics',
    title: 'Screen Reader Testing Basics',
    description:
      'A guided introduction to testing with NVDA and VoiceOver, including what to listen for and how to document findings.',
    duration: '90 min',
    difficulty: 'Intermediate',
    embedUrl: '/modules/screen-reader-basics/index.html',
  },
]

export function getTrainingBySlug(slug) {
  return trainings.find((training) => training.slug === slug)
}
