import React from 'react';
import { AlertTriangle, Phone } from 'lucide-react';

interface EmergencyBannerProps {
  location?: string;
  lastUpdate?: string;
  emergencyContacts: { name: string; number: string }[];
}

export function EmergencyBanner({ location, lastUpdate, emergencyContacts }: EmergencyBannerProps) {
  return (
    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
      <div className="flex items-center">
        <AlertTriangle className="h-6 w-6 text-red-500 mr-3" />
        <div>
          <h3 className="text-lg font-medium text-red-700">Emergency Information</h3>
          {location && <p className="text-sm text-red-600">Location: {location}</p>}
          {lastUpdate && (
            <p className="text-sm text-red-600">Last updated: {lastUpdate}</p>
          )}
        </div>
      </div>
      <div className="mt-3">
        <h4 className="text-sm font-medium text-red-700 flex items-center">
          <Phone className="h-4 w-4 mr-1" />
          Emergency Contacts:
        </h4>
        <ul className="mt-1 space-y-1">
          {emergencyContacts.map((contact, index) => (
            <li key={index} className="text-sm text-red-600">
              {contact.name}: <a href={`tel:${contact.number}`} className="font-medium">{contact.number}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}