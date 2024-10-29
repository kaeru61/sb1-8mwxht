import React from 'react';
import { BookOpen, Search, Briefcase, Calendar } from 'lucide-react';
import { Page } from '../types';

interface HeaderProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

export function Header({ onNavigate, currentPage }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">ContentHub</span>
            </div>
            <nav className="flex space-x-4">
              <button
                onClick={() => onNavigate('articles')}
                className={`px-3 py-2 rounded-md text-sm font-medium flex items-center ${
                  currentPage === 'articles'
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <BookOpen className="h-4 w-4 mr-1" />
                Knowledge
              </button>
              <button
                onClick={() => onNavigate('jobs')}
                className={`px-3 py-2 rounded-md text-sm font-medium flex items-center ${
                  currentPage === 'jobs'
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Briefcase className="h-4 w-4 mr-1" />
                Jobs
              </button>
              <button
                onClick={() => onNavigate('calendar')}
                className={`px-3 py-2 rounded-md text-sm font-medium flex items-center ${
                  currentPage === 'calendar'
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Calendar className="h-4 w-4 mr-1" />
                Calendar
              </button>
            </nav>
          </div>
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder={`Search ${currentPage}...`}
              />
            </div>
          </div>
          <div>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              {currentPage === 'jobs' ? 'Post Job' : currentPage === 'calendar' ? 'Add Event' : 'Write Article'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}