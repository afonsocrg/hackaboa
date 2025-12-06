import { Tweet } from 'react-tweet'
import { useEffect, useState } from 'react'

const GIST_URL = 'https://gist.githubusercontent.com/afonsocrg/039d0c8ff21ab254bb6e31f8a0e45070/raw/hackaboa_posts.json'

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

  return (
    <div className="my-12">
      <p>Our latest meetups:</p>

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
                <Tweet id={tweet.id} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
