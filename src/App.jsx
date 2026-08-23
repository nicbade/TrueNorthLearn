import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SkipLink from './components/SkipLink'
import { ThemeProvider } from './components/ThemeProvider'
import HubPage from './pages/HubPage'
import TrainingPage from './pages/TrainingPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <SkipLink />
        <Routes>
          <Route path="/" element={<HubPage />} />
          <Route path="/training/:slug" element={<TrainingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
