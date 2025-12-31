import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Article from './Article'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article/:slug" element={<Article />} />
    </Routes>
  )
}

export default App
