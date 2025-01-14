export default function Pricing() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center text-yellow-400 mb-12">Choose Your Package</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Starter Package */}
          <div className="bg-zinc-900 rounded-lg p-8 border-2 border-yellow-400/20 hover:border-yellow-400 transition-colors">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Starter</h2>
            <p className="text-3xl font-bold mb-6">50k RWF</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                2-hour event coverage
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Basic editing
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Digital delivery
              </li>
            </ul>
            <button className="w-full btn-primary">Get Started</button>
          </div>

          {/* Advanced Package */}
          <div className="bg-zinc-900 rounded-lg p-8 border-2 border-yellow-400 transform scale-105">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Advanced</h2>
            <p className="text-3xl font-bold mb-6">100k RWF</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                4-hour event coverage
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Professional editing
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Background music
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Digital + USB delivery
              </li>
            </ul>
            <button className="w-full btn-primary">Choose Advanced</button>
          </div>

          {/* Enterprise Package */}
          <div className="bg-zinc-900 rounded-lg p-8 border-2 border-yellow-400/20 hover:border-yellow-400 transition-colors">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Enterprise</h2>
            <p className="text-3xl font-bold mb-6">Contact Sales</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Custom duration
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Premium editing
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Multiple camera angles
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Custom requirements
              </li>
            </ul>
            <button className="w-full btn-primary">Contact Sales Team</button>
          </div>
        </div>
      </div>
    </div>
  );
}