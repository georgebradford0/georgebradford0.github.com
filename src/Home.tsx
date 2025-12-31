import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="container">
      <nav className="article-links">
        <Link to="/article/sample-article" className="article-link">
          Sample Article
        </Link>
      </nav>
    </div>
  )
}

export default Home
