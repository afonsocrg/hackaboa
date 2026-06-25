import { Tweet } from 'react-tweet'
import { Component, type ReactNode, useEffect, useState } from 'react'

const GIST_URL = 'https://gist.githubusercontent.com/afonsocrg/039d0c8ff21ab254bb6e31f8a0e45070/raw/hackaboa_posts.json'

// react-tweet can throw while rendering if Twitter's syndication API returns an
// unexpected shape (e.g. omitting empty entity arrays). A render error can't be
// caught with try/catch, so we isolate each tweet behind an error boundary to
// keep one bad tweet from taking down the whole page.
class TweetErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: unknown) {
    console.error('Failed to render tweet:', error)
  }

  render() {
    if (this.state.hasError) return null
    return this.props.children
  }
}

export default function TweetsSection() {
  const [tweets, setTweets] = useState<{ id: string }[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(GIST_URL)
      .then(res => res.json())
      .then(data => {
        setTweets(data.map((id: string) => ({ id })))
        setIsLoading(false)
      })
      .catch(err => {
        console.error('Failed to load tweets:', err)
        setIsLoading(false)
      })
  }, [])

  // Nothing to show: hide the whole section rather than render an empty header.
  if (!isLoading && tweets.length === 0) {
    if (import.meta.env.DEV) {
      console.log('[TweetsSection] No tweets to display — section hidden.')
    }
    return null
  }

  return (
    <section className="my-12">
      <p>Previous meetups:</p>

      {isLoading ? (
        <p className="text-center py-8">Loading...</p>
      ) : (
        <div className="overflow-x-auto scroll-smooth">
          <div className="flex gap-4 pb-2">
            {tweets.map(tweet => (
              <div
                key={tweet.id}
                className="dark"
              >
                <TweetErrorBoundary>
                  <Tweet id={tweet.id} />
                </TweetErrorBoundary>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
