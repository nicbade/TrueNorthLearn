export const THEME_STORAGE_KEY = 'tn-theme'

/** @typedef {'light' | 'dark'} Theme */

/** @returns {Theme} */
export function getPreferredTheme() {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') return stored
  } catch {
    /* ignore */
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

/** @param {Theme} theme */
export function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme)
}

/** @param {Theme} theme */
export function persistTheme(theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    /* ignore */
  }
}
