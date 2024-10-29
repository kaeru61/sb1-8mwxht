import React from 'react';
import { ExternalLink, Shield, Users, AlertCircle, Link as LinkIcon } from 'lucide-react';
import { ResourceLink } from '../types';

const iconMap = {
  official: Shield,
  community: Users,
  emergency: AlertCircle,
  other: LinkIcon
};

interface ResourceLinksProps {
  resources: ResourceLink[];
}

export function ResourceLinks({ resources }: ResourceLinksProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-4 mt-6">
      <h3 className="text-lg font-medium text-gray-900 mb-3">Important Resources</h3>
      <div className="space-y-2">
        {resources.map((resource, index) => {
          const Icon = iconMap[resource.type];
          return (
            <a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-2 hover:bg-gray-100 rounded-md group"
            >
              <Icon className="h-5 w-5 text-gray-500 mr-2" />
              <span className="flex-1 text-gray-700">{resource.title}</span>
              <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-gray-600" />
            </a>
          );
        })}
      </div>
    </div>
  );
}