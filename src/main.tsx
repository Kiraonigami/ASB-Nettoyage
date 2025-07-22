import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const root = document.getElementById('root')!

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// 🧠 Ajoute cette ligne pour signaler que le rendu est prêt
if (navigator.userAgent === 'ReactSnap') {
  setTimeout(() => {}, 100) // petit délai pour laisser le rendu se faire
}
