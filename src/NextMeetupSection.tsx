import { useState } from 'react'
import LumaEmbed from './LumaEmbed'
import EventDatePicker from './EventDatePicker'
import scheduledEvents from './data/scheduledEvents.json'

const DEBUG_EVENTS = import.meta.env.VITE_DEBUG_EVENTS === 'true'

function getNextEventId(currentDate: Date): string | null {
  const currentDateStr = currentDate.toISOString().split('T')[0]

  // Find the first event after the current date (production logic)
  for (const event of scheduledEvents) {
    if (event.date > currentDateStr) {
      return event.eventId
    }
  }

  return null
}

function getEventIdForDate(dateStr: string): string | null {
  const event = scheduledEvents.find((e) => e.date === dateStr)
  return event?.eventId ?? null
}

export default function NextMeetupSection() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null) // null => use current date
  const currentDateStr = selectedDate?.toISOString().split('T')[0] ?? null

  const eventId = selectedDate
    ? getEventIdForDate(currentDateStr!)
    : getNextEventId(new Date())

  // No event to show: hide the section rather than render an empty header.
  // Keep it visible while debugging so the date picker stays usable.
  if (!eventId && !DEBUG_EVENTS) {
    if (import.meta.env.DEV) {
      console.log('[NextMeetupSection] No upcoming events — section hidden.')
    }
    return null
  }

  return (
    <section className="mt-8 text-left">

      <div className="flex flex-col justify-center my-12">
        <h4>Our next meetup:</h4>
        {eventId ? (
          <LumaEmbed eventId={eventId} />
        ) : (
          <p className="my-12 text-center text-gray-500">No upcoming events scheduled.</p>
        )}
        {DEBUG_EVENTS && (
          <EventDatePicker
            selectedDate={selectedDate}
            onSelectDate={setSelectedDate}
          />
        )}
      </div>
    </section>
  )
}
