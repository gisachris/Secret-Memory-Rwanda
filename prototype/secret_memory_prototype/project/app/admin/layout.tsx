'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const authStatus = sessionStorage.getItem('adminAuth');
    if (!authStatus) {
      router.push('/admin/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen bg-black">
      <nav className="bg-zinc-900 border-b border-yellow-400/20">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/admin" className="text-yellow-400 font-bold text-xl">
                Admin Dashboard
              </Link>
              <Link 
                href="/admin/editor" 
                className={`text-white hover:text-yellow-400 transition-colors ${
                  pathname === '/admin/editor' ? 'text-yellow-400' : ''
                }`}
              >
                Editor
              </Link>
              <Link 
                href="/admin/documentaries" 
                className={`text-white hover:text-yellow-400 transition-colors ${
                  pathname === '/admin/documentaries' ? 'text-yellow-400' : ''
                }`}
              >
                Documentaries
              </Link>
            </div>
            <button 
              onClick={() => {
                sessionStorage.removeItem('adminAuth');
                router.push('/admin/login');
              }}
              className="text-white hover:text-yellow-400 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
      <div className="p-8">
        {children}
      </div>
    </div>
  );
}