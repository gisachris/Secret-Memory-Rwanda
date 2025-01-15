export default function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-yellow-400 mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-zinc-900 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-yellow-400 mb-4">Total Documentaries</h2>
          <p className="text-4xl font-bold">18</p>
        </div>
        
        <div className="bg-zinc-900 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-yellow-400 mb-4">Active Projects</h2>
          <p className="text-4xl font-bold">5</p>
        </div>
        
        <div className="bg-zinc-900 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-yellow-400 mb-4">Completed Projects</h2>
          <p className="text-4xl font-bold">13</p>
        </div>
      </div>
    </div>
  );
}