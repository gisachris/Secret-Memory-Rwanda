'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface SearchContextType {
  searchQuery: string;
  searchType: 'phone' | 'name';
  setSearchQuery: (query: string) => void;
  setSearchType: (type: 'phone' | 'name') => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState<'phone' | 'name'>('name');

  return (
    <SearchContext.Provider value={{ searchQuery, searchType, setSearchQuery, setSearchType }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchContext() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearchContext must be used within a SearchProvider');
  }
  return context;
}