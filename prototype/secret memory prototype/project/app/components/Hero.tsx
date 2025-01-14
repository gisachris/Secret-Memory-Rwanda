'use client';

import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-black py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 
          className={`text-5xl font-bold mb-6 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <span className="text-yellow-400">Secret Memory Rwanda</span>
        </h1>
        
        <p 
          className={`text-xl text-gray-300 mb-12 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Capturing your precious moments through professional documentary filmmaking. 
          We create stunning, cinematic documentaries that preserve your special events 
          for generations to come.
        </p>

        <div 
          className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <SearchBar />
        </div>
      </div>
    </div>
  );
}