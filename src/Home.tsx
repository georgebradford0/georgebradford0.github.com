import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="container">
      <nav className="article-links">
        <Link to="https://github.com/georgebradford0/okto.git" className="article-link">
          Okto - A mobile LLM agent management platform
        </Link>
      </nav>
    </div>
  )
}

export default Home
