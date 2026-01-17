import scheduledEvents from './data/scheduledEvents.json'

interface EventDatePickerProps {
  selectedDate: Date | null
  onSelectDate: (date: Date | null) => void
}

export default function EventDatePicker({ selectedDate, onSelectDate }: EventDatePickerProps) {
  const currentDateStr = selectedDate?.toISOString().split('T')[0] ?? null

  return (
    <div className="my-4 p-4 bg-gray-100 text-black rounded-lg">
      <div className="flex items-center gap-4 mb-2">
        <p className="text-sm font-bold">
          {selectedDate ? `Viewing: ${currentDateStr}` : 'Using current date (production)'}
        </p>
        <button
          onClick={() => onSelectDate(null)}
          className={`px-2 py-1 text-xs rounded ${
            selectedDate === null
              ? 'bg-blue-500 text-white'
              : 'bg-white border border-gray-300 hover:bg-gray-50'
          }`}
        >
          Use current date
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {scheduledEvents.map((event) => (
          <button
            key={event.eventId}
            onClick={() => onSelectDate(new Date(event.date))}
            className={`px-2 py-1 text-xs rounded ${
              currentDateStr === event.date
                ? 'bg-avocado-500 text-white'
                : 'bg-white border border-gray-300 hover:bg-gray-50'
            }`}
          >
            {event.date}
          </button>
        ))}
      </div>
    </div>
  )
}
