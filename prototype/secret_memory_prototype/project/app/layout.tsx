import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SearchProvider } from './context/SearchContext';
import Navigation from './components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Documentary Projects Portal',
  description: 'Secure access to documentary projects and materials',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <SearchProvider>
          <Navigation />
          {children}
        </SearchProvider>
      </body>
    </html>
  );
}