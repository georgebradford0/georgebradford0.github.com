import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Article from './Article'
import About from './About'

function App() {
  return (
    <>
      <header className="app-header">
        <div className="header-content">
          <Link to="/" className="title-link">
            <h1 className="title">George Bradford</h1>
          </Link>
          <Link to="/about" className="about-link">About</Link>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:slug" element={<Article />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
