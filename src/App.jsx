import React from 'react'
import Router from './routes/Router'
import ScrollProgressBar from './components/ScrollProgressBar'
import './App.css'

function App() {
  return (
    <div className="app">
      <ScrollProgressBar />
      <Router />
    </div>
  )
}

export default App
