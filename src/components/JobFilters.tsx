import React from 'react';
import { Filter } from 'lucide-react';

interface JobFiltersProps {
  onFilterChange: (filters: any) => void;
}

export function JobFilters({ onFilterChange }: JobFiltersProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-gray-900 flex items-center">
          <Filter className="w-5 h-5 mr-2" />
          Filters
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <select className="form-select rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
          <option value="">Job Type</option>
          <option value="full-time">Full Time</option>
          <option value="part-time">Part Time</option>
          <option value="volunteer">Volunteer</option>
          <option value="temporary">Temporary</option>
        </select>

        <select className="form-select rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
          <option value="">Urgency</option>
          <option value="immediate">Immediate</option>
          <option value="high">High</option>
          <option value="normal">Normal</option>
        </select>

        <select className="form-select rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
          <option value="">Location</option>
          <option value="remote">Remote</option>
          <option value="on-site">On-site</option>
        </select>

        <div className="relative">
          <input
            type="text"
            placeholder="Search jobs..."
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
      </div>
    </div>
  );
}