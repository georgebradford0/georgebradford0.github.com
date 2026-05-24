import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="container">
      <div className="article-section">
        <h2>Apps</h2>
        <nav className="article-links">
          <Link to="https://github.com/georgebradford0/okto.git" className="article-link">
            Okto
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Home
