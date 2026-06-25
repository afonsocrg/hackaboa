export default function HeroSection() {
  return (
    <section>
      <h1 className="text-center text-avocado-500">
        Hackaboa <span className="whitespace-nowrap">💻🤓🚃</span>
      </h1>
      <h2 className="text-center text-avocado-500 text-base mt-8 mb-8">
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
        A community-run group of indie makers / coders / designers / hardware hackers who build their own independent apps/startups, meeting up every Thursday for weekly co-working (and demos) at{' '}
        <a
          href="https://unicornfactorylisboa.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#3872EC] hover:text-[#3872EC]/60"
        >
          Unicorn Factory Lisboa
        </a>
        , our home base in Lisbon, Portugal.
      </p>
      <p className="text-base italic font-bold">
        Not in Lisbon?{' '}
        <a
          href="https://hacka.network/?utm_source=hackaboa"
          target="_blank"
          className="underline text-[#3872EC] hover:text-[#3872EC]/60"
        >
          More locations
        </a>
      </p>

      <p>
        If you code <span className="font-bold">your own projects</span> come and join us every Thursday from 9.15am in Lisbon.
      </p>

      <p>The usual schedule is:</p>
      <ul className="list-disc list-inside mb-4">
        <li><span className="font-bold">9.30am – Doors open</span></li>
        <li><span className="font-bold">10.30am – Intros</span> (a little about yourself + what you're working on)</li>
        <li><span className="font-bold">12:30pm – Local lunch</span> together (if you want)</li>
        <li><span className="font-bold">4pm – Demos</span> (share what you made today, or just watch)</li>
        <li><span className="font-bold">5pm – Drinks</span> somewhere nearby 🍻🍷</li>
      </ul>

      <p className="text-sm italic">
        We follow the official{' '}
        <a
          href="https://github.com/hacka-network/hacka.network/blob/main/day-rules.md"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#3872EC] hover:text-[#3872EC]/60"
        >
          Hacka* day rules
        </a>
        .
      </p>
    </section>
  )
}
