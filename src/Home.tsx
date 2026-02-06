import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="container">
      <div className="article-section">
        <h2>Apps</h2>
        <nav className="article-links">
          <Link to="https://callos.io/download" className="article-link">
            Callos App
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Home
