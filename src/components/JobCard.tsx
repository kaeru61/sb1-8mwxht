import React from 'react';
import { MapPin, Clock, Briefcase, AlertCircle, Tag } from 'lucide-react';
import { Job } from '../types';

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  const urgencyColors = {
    immediate: 'bg-red-100 text-red-800',
    high: 'bg-orange-100 text-orange-800',
    normal: 'bg-blue-100 text-blue-800'
  };

  const typeColors = {
    'full-time': 'bg-green-100 text-green-800',
    'part-time': 'bg-purple-100 text-purple-800',
    'volunteer': 'bg-blue-100 text-blue-800',
    'temporary': 'bg-yellow-100 text-yellow-800'
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <img
            src={job.logo}
            alt={job.organization}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
            <p className="text-gray-600">{job.organization}</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${urgencyColors[job.urgency]}`}>
            {job.urgency.charAt(0).toUpperCase() + job.urgency.slice(1)}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${typeColors[job.type]}`}>
            {job.type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </span>
        </div>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center text-gray-600">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Clock className="w-4 h-4 mr-2" />
          <span>Posted {new Date(job.postedAt).toLocaleDateString()}</span>
          {job.deadline && (
            <span className="ml-2 text-red-600">
              • Deadline: {new Date(job.deadline).toLocaleDateString()}
            </span>
          )}
        </div>
      </div>

      <p className="text-gray-600 mb-4">{job.description}</p>

      <div className="space-y-2 mb-4">
        <h4 className="font-medium text-gray-900">Requirements:</h4>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          {job.requirements.slice(0, 3).map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between mt-4 pt-4 border-t">
        <div className="flex space-x-2">
          {job.tags.slice(0, 2).map((tag, index) => (
            <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
        <a
          href={`mailto:${job.contactEmail}`}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
}