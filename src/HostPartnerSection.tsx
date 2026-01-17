import UFLLogo from './assets/ufl_logo.png'

export default function HostPartnerSection() {
  return (
    <section className="mt-12 mb-8 text-center">
      <p className="text-sm mb-4">Proudly hosted by ❤️:</p>
      <a
        href="https://unicornfactorylisboa.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-white rounded-lg p-6 hover:bg-gray-100 transition-colors"
      >
        <img
          src={UFLLogo}
          alt="Unicorn Factory Lisboa"
          className="h-12 mx-auto"
        />
      </a>
    </section>
  )
}
