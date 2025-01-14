'use client';

import { useState } from 'react';

interface FolderAccessModalProps {
  show: boolean;
  folder: any;
  onClose: () => void;
  demoPassword: string;
  onAccessGranted: () => void;
}

export default function FolderAccessModal({ show, folder, onClose, demoPassword, onAccessGranted }: FolderAccessModalProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (!show) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === demoPassword) {
      onAccessGranted();
      setPassword('');
      setError('');
      onClose();
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50">
      <div className="bg-zinc-900 p-8 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-yellow-400 mb-6 text-center">
          Access {folder?.name}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 rounded bg-black border border-yellow-400 text-white"
              placeholder="Enter folder password"
              required
            />
            {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
          </div>
          
          <div className="flex gap-4 mt-6">
            <button 
              type="button"
              onClick={onClose}
              className="flex-1 py-2 px-4 rounded bg-zinc-700 hover:bg-zinc-600 transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="flex-1 btn-primary"
            >
              Access Folder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}