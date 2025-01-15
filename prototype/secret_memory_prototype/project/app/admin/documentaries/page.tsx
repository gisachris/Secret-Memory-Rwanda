'use client';

import { useState } from 'react';

export default function AdminDocumentaries() {
  const [selectedFolder, setSelectedFolder] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  const folders = [
    { id: 1, name: "Sarah & Mike's Wedding", date: "2023", phone: "123-456-7890", hidden: false },
    { id: 2, name: "Johnson Family Reunion", date: "2023", phone: "234-567-8901", hidden: true },
    // ... other folders
  ];

  const handleFolderClick = (folder: any) => {
    setSelectedFolder(folder);
    setShowModal(true);
  };

  const handleDelete = () => {
    // In a real application, this would connect to a backend to delete the folder
    setShowModal(false);
    setSelectedFolder(null);
  };

  const handleToggleVisibility = () => {
    // In a real application, this would connect to a backend to toggle visibility
    setShowModal(false);
    setSelectedFolder(null);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-yellow-400 mb-8">Manage Documentaries</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {folders.map((folder) => (
          <div
            key={folder.id}
            onClick={() => handleFolderClick(folder)}
            className={`aspect-square bg-zinc-900 rounded-lg p-4 cursor-pointer hover:bg-zinc-800 border-2 border-yellow-400/50 hover:border-yellow-400 flex flex-col items-center justify-center ${
              folder.hidden ? 'opacity-50' : ''
            }`}
          >
            <div className="w-12 h-12 mb-3">
              <svg className="w-full h-full text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold text-center mb-1">{folder.name}</h3>
            <p className="text-xs text-gray-400">{folder.date}</p>
          </div>
        ))}
      </div>

      {showModal && selectedFolder && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50">
          <div className="bg-zinc-900 p-8 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">
              Manage {selectedFolder.name}
            </h2>
            
            <div className="space-y-4">
              <button 
                onClick={handleToggleVisibility}
                className="w-full btn-primary mb-4"
              >
                {selectedFolder.hidden ? 'Show' : 'Hide'} Folder
              </button>
              
              <button 
                onClick={handleDelete}
                className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition-colors"
              >
                Delete Folder
              </button>
              
              <button 
                onClick={() => setShowModal(false)}
                className="w-full bg-zinc-700 text-white font-bold py-2 px-4 rounded hover:bg-zinc-600 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}