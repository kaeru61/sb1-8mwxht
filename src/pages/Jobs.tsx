import React from 'react';
import { JobCard } from '../components/JobCard';
import { JobFilters } from '../components/JobFilters';
import { jobs } from '../data/jobs';
import { BriefcaseIcon } from 'lucide-react';

export function Jobs() {
  const handleFilterChange = (filters: any) => {
    // Handle filter changes
    console.log(filters);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <BriefcaseIcon className="w-8 h-8 mr-2 text-indigo-600" />
            Humanitarian Job Board
          </h1>
          <p className="mt-2 text-gray-600">Find opportunities to make a difference in disaster response and community support</p>
        </div>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Post a Job
        </button>
      </div>

      <JobFilters onFilterChange={handleFilterChange} />

      <div className="grid grid-cols-1 gap-6">
        {jobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}