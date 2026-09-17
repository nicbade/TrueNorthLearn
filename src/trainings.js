/**
 * Training library catalog.
 *
 * To add a new training:
 * 1. Export the Figma Make module as a standalone HTML/React app
 * 2. Build it with base path /modules/<slug>/ (or host it elsewhere)
 * 3. Place the build under public/modules/<slug>/
 * 4. Add an object to this array — the hub and routes pick it up automatically
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
    slug: 'digital-accessibility-101',
    title: 'Digital Accessibility 101',
    description:
      'An interactive, training that gives anyone on a digital product team a working understanding of web accessibility, WCAG 2.2 AA, and how disability shows up in everyday product use; including a hands-on knowledge check.',
    duration: '15–20 min',
    difficulty: 'Beginner',
    embedUrl: '/modules/digital-accessibility-101/index.html',
  },
  {
    slug: 'color-contrast-101',
    title: 'Color Contrast 101',
    description:
      'An interactive training on WCAG color contrast for designers, developers, and QA — why it fails so often, the ratios that matter, how to check them, and common mistakes to avoid.',
    duration: '10 min',
    difficulty: 'Beginner',
    embedUrl: '/modules/color-contrast-101/index.html',
  },
  {
    slug: 'image-accessibility-101',
    title: 'Image Accessibility 101',
    description:
      'Interactive self-paced training on writing accessible image descriptions, with clear slides, examples, and quizzes to build web accessibility skills.',
    duration: '15–20 min',
    difficulty: 'Beginner',
    embedUrl: '/modules/image-accessibility-101/index.html',
  },
  {
    slug: 'assistive-technology-101',
    title: 'Introduction to Assistive Technologies',
    description:
      'A short overview of assistive technology — what it is, who uses it, and how structure and keyboard access make digital products work with the tools people rely on.',
    duration: '10–15 min',
    difficulty: 'Beginner',
    embedUrl: '/modules/assistive-technology-101/index.html',
  },
  {
    slug: 'introduction-to-screen-readers',
    title: 'Introduction to Screen Readers',
    description:
      'A light, high-level intro to screen readers — what they do, the major tools people use, how navigation works, and common myths — before the hands-on courses.',
    duration: '10–15 min',
    difficulty: 'Beginner',
    embedUrl: '/modules/introduction-to-screen-readers/index.html',
  },
  {
    slug: 'voiceover-mac-101',
    title: 'VoiceOver Mac 101',
    description:
      'A hands-on intro to VoiceOver on Mac — how to turn it on, the VO key, navigation commands, and practice with real keyboard shortcuts.',
    duration: '8–10 min',
    difficulty: 'Beginner',
    embedUrl: '/modules/voiceover-mac-101/index.html',
  },
]

export function getTrainingBySlug(slug) {
  return trainings.find((training) => training.slug === slug)
}
