export default function LumaEmbed() {
  return (
    <div className="flex flex-col justify-center my-12">
      <h4>Our next meetup:</h4>
      <iframe
        src="https://lu.ma/embed/event/evt-HiWN47YFMrrk2zo/simple"
        frameBorder="0"
        style={{ border: '1px solid #bfcbda88', borderRadius: '12px' }}
        allow="fullscreen; payment"
        aria-hidden="false"
        tabIndex={0}
        className="w-full mx-auto h-[790px] md:h-[480px]"
      />
    </div>
  )
}
