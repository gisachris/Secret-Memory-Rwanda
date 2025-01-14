import Hero from './components/Hero';
import FolderGrid from './components/FolderGrid';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="p-4 md:p-8">
        <FolderGrid />
      </div>
    </main>
  );
}