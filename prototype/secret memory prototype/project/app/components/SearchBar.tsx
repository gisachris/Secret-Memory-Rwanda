'use client';

import { useState } from 'react';
import { useSearchContext } from '../context/SearchContext';

export default function SearchBar() {
  const [searchType, setSearchType] = useState<'phone' | 'name'>('name');
  const { setSearchQuery, setSearchType: setContextSearchType } = useSearchContext();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query.toLowerCase());
  };

  const handleSearchTypeChange = (type: 'phone' | 'name') => {
    setSearchType(type);
    setContextSearchType(type);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative">
        <div className="flex items-center justify-center space-x-4 mb-4">
          <button
            onClick={() => handleSearchTypeChange('name')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              searchType === 'name'
                ? 'bg-yellow-400 text-black'
                : 'bg-zinc-800 text-white hover:bg-zinc-700'
            }`}
          >
            Search by Name
          </button>
          <button
            onClick={() => handleSearchTypeChange('phone')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              searchType === 'phone'
                ? 'bg-yellow-400 text-black'
                : 'bg-zinc-800 text-white hover:bg-zinc-700'
            }`}
          >
            Search by Phone
          </button>
        </div>
        
        <div className="relative">
          <input
            type="search"
            onChange={handleSearch}
            placeholder={`Search ${searchType === 'phone' ? 'by phone number' : 'for your folder'}...`}
            className="w-full p-4 pl-12 rounded-full bg-black border-2 border-yellow-400 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 text-lg"
          />
          <svg
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-yellow-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}