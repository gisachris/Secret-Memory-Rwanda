'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function FolderPage({ params }: { params: { id: string } }) {
  const router = useRouter();

  useEffect(() => {
    // This helps prevent the RSC payload error by ensuring the component is mounted
    if (typeof window !== 'undefined' && !params.id) {
      router.push('/');
    }
  }, [params.id, router]);

  if (!params.id) return null;

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-yellow-400 mb-8">Project Details</h1>
        
        {/* Payment Progress */}
        <div className="bg-zinc-900 p-8 rounded-lg mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-yellow-400">Payment Status</h2>
            <span className="text-green-400 font-bold">100% Complete</span>
          </div>
          <div className="w-full bg-black rounded-full h-4">
            <div className="bg-green-400 h-4 rounded-full w-full"></div>
          </div>
        </div>

        {/* Completed Documentary */}
        <div className="bg-zinc-900 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">Completed Documentary</h2>
          <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
            <div className="text-center">
              <svg className="w-16 h-16 text-yellow-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <button className="btn-primary">
                Download Documentary
              </button>
            </div>
          </div>
        </div>

        {/* Raw Footage */}
        <div className="bg-zinc-900 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">Raw Footage</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-video bg-black rounded-lg flex items-center justify-center hover:bg-zinc-800 transition-colors cursor-pointer group">
                <div className="text-center">
                  <svg className="w-8 h-8 text-yellow-400 mx-auto mb-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                    Clip {item}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}