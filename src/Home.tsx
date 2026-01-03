import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="container">
      <section className="article-section">
        <h2>Intelligence</h2>
        <nav className="article-links">
          <Link to="/article/sample-article" className="article-link">
            Sample Article
          </Link>
        </nav>
      </section>

      <section className="article-section">
        <h2>Bodybuilding</h2>
        <nav className="article-links">
        </nav>
      </section>

    </div>
  )
}

export default Home
