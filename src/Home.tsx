import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="container">
      <div className="article-section">
        <h2>Apps</h2>
        <nav className="article-links">
          <Link to="https://callos.io/download" className="article-link">
            Peakt
          </Link>
          <Link to="https://github.com/georgebradford0/octo.git" className="article-link">
            Octo
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Home
