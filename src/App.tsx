import GitHubLogo from './assets/github.svg'
import HeroSection from './HeroSection'
import NextMeetupSection from './NextMeetupSection'
import TweetsSection from './TweetsSection'
import HostPartnerSection from './HostPartnerSection'

export default function App() {
  return (
    <div className="w-full flex flex-col">
      <a href="https://github.com/afonsocrg/hackaboa" target="_blank" className="github-icon">
        <img alt="Edit this on GitHub" width="30" height="30" src={GitHubLogo} />
      </a>

      <div className="p-8 mt-20 max-w-full md:max-w-3xl mx-auto">
        <HeroSection />
        <NextMeetupSection />
        <TweetsSection />
        <HostPartnerSection />
      </div>
    </div>
  )
}
