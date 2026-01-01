import { useParams } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import remarkGfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'
import rehypeRaw from 'rehype-raw'
import './Article.css'

function Article() {
  const { slug } = useParams<{ slug: string }>()
  const [markdown, setMarkdown] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const footnoteRefs = useRef<{ [key: string]: HTMLElement | null }>({})
  const [footnotePositions, setFootnotePositions] = useState<{ [key: string]: number }>({})
  const containerRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    // Calculate positions after markdown is rendered
    const updatePositions = () => {
      if (!containerRef.current) return

      const containerTop = containerRef.current.getBoundingClientRect().top + window.pageYOffset
      const positions: { [key: string]: number } = {}

      Object.keys(footnoteRefs.current).forEach(key => {
        const element = footnoteRefs.current[key]
        if (element) {
          const rect = element.getBoundingClientRect()
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop
          // Calculate position relative to container
          positions[key] = (rect.top + scrollTop) - containerTop
        }
      })
      setFootnotePositions(positions)
    }

    if (markdown) {
      // Wait for render
      setTimeout(updatePositions, 100)
      window.addEventListener('resize', updatePositions)
      return () => window.removeEventListener('resize', updatePositions)
    }
  }, [markdown])

  const components = {
    a: ({ children, href, ...props }: any) => {
      // Footnote reference links have href like #user-content-fn-1
      if (href && href.includes('#user-content-fn-')) {
        const footnoteId = href.replace('#user-content-fn-', '')
        return (
          <a
            href={href}
            ref={(el) => {
              if (el) {
                footnoteRefs.current[footnoteId] = el
              }
            }}
            {...props}
          >
            {children}
          </a>
        )
      }
      return <a href={href} {...props}>{children}</a>
    },
    section: ({ children, ...props }: any) => {
      // Footnote definitions are in a section with data-footnotes
      // Check both data-footnotes and dataFootnotes (camelCase from rehype-raw)
      if (props['data-footnotes'] || props['dataFootnotes'] || props.className?.includes('footnotes')) {
        // Don't render the default footnote section
        return null
      }
      return <section {...props}>{children}</section>
    }
  }

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

  // Extract footnotes from markdown for sidebar
  const footnoteMatches = markdown.match(/\[\^(\d+)\]:\s*(.+?)(?=\n\[\^|\n\n|$)/gs)
  const footnotes: { [key: string]: string } = {}
  if (footnoteMatches) {
    footnoteMatches.forEach(match => {
      const [, id, content] = match.match(/\[\^(\d+)\]:\s*(.+)/s) || []
      if (id && content) {
        footnotes[id] = content.trim()
      }
    })
  }

  return (
    <div className="article-container-with-sidebar" ref={containerRef}>
      <div></div>
      <article className="article-content">
        <ReactMarkdown
          remarkPlugins={[remarkMath, remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeKatex]}
          components={components}
        >
          {markdown}
        </ReactMarkdown>
      </article>
      <aside className="article-sidebar">
        {Object.keys(footnotes).map(key => {
          const position = footnotePositions[key]
          return (
            <div
              key={key}
              className="sidebar-footnote"
              style={{
                position: 'absolute',
                top: position !== undefined ? `${position}px` : 'auto'
              }}
            >
              <sup>{key}</sup> {footnotes[key]}
            </div>
          )
        })}
      </aside>
    </div>
  )
}

export default Article
