'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-zinc-900 p-8 rounded-lg max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">Something went wrong!</h2>
        <p className="text-gray-400 mb-6">Please try again later or contact support if the problem persists.</p>
        <button
          onClick={reset}
          className="btn-primary"
        >
          Try again
        </button>
      </div>
    </div>
  );
}