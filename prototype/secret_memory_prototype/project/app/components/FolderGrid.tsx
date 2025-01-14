'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import FolderAccessModal from './FolderAccessModal';
import { useSearchContext } from '../context/SearchContext';

// Dummy password for demonstration
const DEMO_PASSWORD = "DC2023";

export default function FolderGrid() {
  const [showAccessForm, setShowAccessForm] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState<any>(null);
  const { searchQuery, searchType } = useSearchContext();
  const router = useRouter();

  const folders = [
    { id: 1, name: "Sarah & Mike's Wedding", date: "2023", phone: "123-456-7890" },
    { id: 2, name: "Johnson Family Reunion", date: "2023", phone: "234-567-8901" },
    { id: 3, name: "Tech Summit 2023", date: "2023", phone: "345-678-9012" },
    { id: 4, name: "Summer Music Festival", date: "2023", phone: "456-789-0123" },
    { id: 5, name: "Asian Travel Series", date: "2023", phone: "567-890-1234" },
    { id: 6, name: "Championship Finals", date: "2023", phone: "678-901-2345" },
    { id: 7, name: "Smith Anniversary", date: "2023", phone: "789-012-3456" },
    { id: 8, name: "Cultural Festival", date: "2023", phone: "890-123-4567" },
    { id: 9, name: "Mountain Expedition", date: "2023", phone: "901-234-5678" },
    { id: 10, name: "Ocean Documentary", date: "2023", phone: "012-345-6789" },
    { id: 11, name: "City Life Series", date: "2023", phone: "123-456-7891" },
    { id: 12, name: "Food Festival", date: "2023", phone: "234-567-8902" },
    { id: 13, name: "Art Exhibition", date: "2023", phone: "345-678-9013" },
    { id: 14, name: "Fashion Show", date: "2023", phone: "456-789-0124" },
    { id: 15, name: "Theater Performance", date: "2023", phone: "567-890-1235" },
    { id: 16, name: "Dance Competition", date: "2023", phone: "678-901-2346" },
    { id: 17, name: "Wildlife Series", date: "2023", phone: "789-012-3457" },
    { id: 18, name: "Desert Adventure", date: "2023", phone: "890-123-4568" }
  ];

  const handleFolderClick = (folder: any) => {
    setSelectedFolder(folder);
    setShowAccessForm(true);
  };

  const handleAccessGranted = (folder: any) => {
    router.push(`/folder/${folder.id}`);
  };

  const filteredFolders = folders.filter(folder => {
    if (!searchQuery) return true;
    if (searchType === 'name') {
      return folder.name.toLowerCase().includes(searchQuery.toLowerCase());
    } else {
      return folder.phone.includes(searchQuery);
    }
  });

  return (
    <>
      <div id="documentaries" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredFolders.map((folder) => (
          <div
            key={folder.id}
            onClick={() => handleFolderClick(folder)}
            className="aspect-square bg-zinc-900 rounded-lg p-4 cursor-pointer hover:bg-zinc-800 border-2 border-yellow-400/50 hover:border-yellow-400 flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-200"
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

      <FolderAccessModal
        show={showAccessForm}
        folder={selectedFolder}
        onClose={() => setShowAccessForm(false)}
        demoPassword={DEMO_PASSWORD}
        onAccessGranted={() => handleAccessGranted(selectedFolder)}
      />
    </>
  );
}