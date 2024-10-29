import React from 'react';
import { MapPin, Clock, Tag, Calendar } from 'lucide-react';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const typeColors = {
    training: 'bg-blue-100 text-blue-800',
    emergency: 'bg-red-100 text-red-800',
    community: 'bg-green-100 text-green-800',
    other: 'bg-gray-100 text-gray-800'
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="bg-indigo-100 p-3 rounded-lg">
            <Calendar className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
            <p className="text-gray-600">{event.organizer.name}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${typeColors[event.type]}`}>
          {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
        </span>
      </div>

      <p className="text-gray-600 mb-4">{event.description}</p>

      <div className="space-y-2">
        <div className="flex items-center text-gray-600">
          <Clock className="w-4 h-4 mr-2" />
          <span>{formatDate(event.startDate)} - {formatDate(event.endDate)}</span>
        </div>
        {event.location && (
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{event.location}</span>
          </div>
        )}
      </div>

      <div className="mt-4 pt-4 border-t flex justify-end">
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Register
        </button>
      </div>
    </div>
  );
}