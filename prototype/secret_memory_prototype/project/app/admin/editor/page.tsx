'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Editor() {
  const [folderName, setFolderName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would connect to a backend to create the folder
    setMessage('Folder created successfully!');
    setFolderName('');
    setPhoneNumber('');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-yellow-400 mb-8">Create New Folder</h1>
      
      <div className="bg-zinc-900 p-8 rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2">Folder Name</label>
            <input
              type="text"
              value={folderName}
              onChange={(e) => setFolderName(e.target.value)}
              className="w-full p-3 rounded bg-black border border-yellow-400 text-white"
              placeholder="Enter folder name"
              required
            />
          </div>
          
          <div>
            <label className="block mb-2">Phone Number</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full p-3 rounded bg-black border border-yellow-400 text-white"
              placeholder="Enter phone number"
              required
            />
          </div>
          
          <button type="submit" className="btn-primary">
            Create Folder
          </button>
          
          {message && (
            <p className="text-green-400 mt-4">{message}</p>
          )}
        </form>
      </div>
    </div>
  );
}