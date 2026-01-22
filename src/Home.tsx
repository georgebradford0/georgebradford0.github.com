import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="container">
      <nav className="article-links">
        <Link to="https://callos.io/download" className="article-link">
          Callos App
        </Link>
        <Link to="#" className="article-link">
          Dummy Link
        </Link>
      </nav>
    </div>
  )
}

export default Home
