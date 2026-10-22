import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/fonts.css'
import './styles/tokens.css'
import './styles/global.css'
import './styles/app.css'
import './styles/sections.css'

import { LangProvider } from './i18n'
import { ThemeProvider } from './theme'
import { MotionProvider } from './motion'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <MotionProvider>
        <LangProvider>
          <App />
        </LangProvider>
      </MotionProvider>
    </ThemeProvider>
  </StrictMode>,
)
