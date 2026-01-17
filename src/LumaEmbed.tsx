interface LumaEmbedProps {
  eventId: string
}
export default function LumaEmbed({eventId}: LumaEmbedProps) {
  return (
    <iframe
      src={`https://lu.ma/embed/event/${eventId}/simple`}
      frameBorder="0"
      style={{ border: '1px solid #bfcbda88', borderRadius: '12px' }}
      allow="fullscreen; payment"
      aria-hidden="false"
      tabIndex={0}
      className="w-full mx-auto h-[790px] md:h-[480px]"
    />
  )
}
