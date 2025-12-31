import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import './Article.css'

function Article() {
  const { slug } = useParams<{ slug: string }>()
  const [markdown, setMarkdown] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch(`/articles/${slug}.md`)

        if (!response.ok) {
          throw new Error('Article not found')
        }

        const text = await response.text()
        setMarkdown(text)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load article')
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      fetchMarkdown()
    }
  }, [slug])

  if (loading) {
    return (
      <div className="article-container">
        <div className="article-content">
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="article-container">
        <div className="article-content">
          <h1>Error</h1>
          <p>{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="article-container">
      <article className="article-content">
        <ReactMarkdown
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex]}
        >
          {markdown}
        </ReactMarkdown>
      </article>
    </div>
  )
}

export default Article
