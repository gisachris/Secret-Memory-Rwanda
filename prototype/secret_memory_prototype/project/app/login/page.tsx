'use client';
import { useState } from 'react';

export default function Login() {
  const [password, setPassword] = useState('');

  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="bg-zinc-900 p-8 rounded-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-yellow-400 mb-8 text-center">Client Access</h1>
        
        <form className="space-y-6">
          <div>
            <label className="block mb-2">Project Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 rounded bg-black border border-yellow-400 text-white"
              placeholder="Enter your project password"
            />
          </div>
          
          <button 
            type="submit" 
            className="btn-primary w-full"
          >
            Access Project
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-400 text-center">
          Need access? Complete your payment to receive credentials.
        </p>
      </div>
    </main>
  );
}