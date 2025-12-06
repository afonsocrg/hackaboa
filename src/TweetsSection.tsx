import { Tweet } from 'react-tweet'

export default function TweetsSection() {

  // Sample tweets array
  const tweets = [
    { id: '1996595049400823973'},
    { id: '1997006139230470345'},
    { id: '1997258969442857262'},
    { id: '1996900104872038612'},
  ]

  return (
    <div className="my-12">
      <p>Our latest meetups:</p>

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
      </div>
  )
}
