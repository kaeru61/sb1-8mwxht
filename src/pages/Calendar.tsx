import React from 'react';
import { EventCard } from '../components/EventCard';
import { events } from '../data/events';
import { Calendar as CalendarIcon } from 'lucide-react';

export function Calendar() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <CalendarIcon className="w-8 h-8 mr-2 text-indigo-600" />
            Event Calendar
          </h1>
          <p className="mt-2 text-gray-600">Upcoming training sessions, workshops, and community events</p>
        </div>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Add Event
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}