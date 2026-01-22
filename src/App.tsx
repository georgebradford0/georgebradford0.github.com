import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Article from './Article'
import Contact from './Contact'

function App() {
  return (
    <>
      <header className="app-header">
        <div className="header-content">
          <Link to="/" className="title-link">
            <h1 className="title">George Bradford</h1>
          </Link>
          <Link to="/contact" className="about-link">Contact</Link>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:slug" element={<Article />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
