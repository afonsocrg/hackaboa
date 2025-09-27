import GitHubLogo from './assets/github.svg'

export default function App() {
  return (
    <div className="w-full flex flex-col">
      <a href="https://github.com/afonsocrg/hackaboa" target="_blank" className="github-icon">
        <img alt="Edit this on GitHub" width="30" height="30" src={GitHubLogo} />
      </a>

      <div className="p-8 mt-20 max-w-3xl mx-auto">
        <h1 className="text-center text-avocado-500">
          Hackaboa <span className="whitespace-nowrap">💻🤓🚃</span>
        </h1>
        <h2 className="text-center text-avocado-500 text-base mt-8 mb-16">
          EST 2025. Part of{' '}
          <a
            href="https://hacka.network/?utm_source=hackaboa"
            target="_blank"
            className="underline text-[#3872EC] hover:text-[#3872EC]/60"
          >
<span className="whitespace-nowrap">HACKA* NETWORK</span>
          </a>
        </h2>
        <p className="font-bold">
          A community-run group of indie makers / coders / designers / hardware hackers who build their own independent apps/startups, meeting up every Thursday for weekly co-working (and demos) in Lisboa, Portugal.
        </p>
        <p className="text-base italic font-bold">
          Not in Lisboa?{' '}
          <a
            href="https://hacka.network/?utm_source=hackaboa"
            target="_blank"
            className="underline text-[#3872EC] hover:text-[#3872EC]/60"
          >
            More locations
          </a>
        </p>

        <div className="mt-8 text-left">
          <p>
            If you code <span className="font-bold">your own projects</span> come and join us every Thursday from 9.15am at a co-working space in Lisboa.
          </p>

          <p>The usual schedule is:</p>
          <ul className="list-disc list-inside mb-4">
            <li><span className="font-bold">9.30am – Intros</span> (a little about yourself + what you're working on)</li>
            <li><span className="font-bold">12:30pm – Local lunch</span> together (if you want)</li>
            <li><span className="font-bold">4pm – Demos</span> (share what you made today, or just watch)</li>
            <li><span className="font-bold">5pm – Drinks</span> somewhere nearby 🍻🍷</li>
          </ul>

          <p className="font-semibold">Please fill out the form and we'll send you the details!</p>
        </div>
      </div>

      <div className="flex flex-col h-[900px] overflow-hidden">
        <iframe
          className="flex-grow w-full -mt-[200px] h-[calc(100%+200px)]"
          src="https://tally.so/r/mRpb79"
          title="Hackaboa Registration Form"
        />
      </div>
    </div>
  )
}
