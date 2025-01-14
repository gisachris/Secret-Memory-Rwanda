export default function About() {
  return (
    <div className="min-h-screen bg-black py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-yellow-400 mb-8">About Us</h1>
        
        <div className="space-y-8">
          <section className="bg-zinc-900 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Our Story</h2>
            <p className="text-gray-300 leading-relaxed">
              Secret Memory Rwanda was founded with a passion for storytelling and preserving precious moments. 
              Since our inception, we've been dedicated to creating compelling documentaries that capture the 
              essence of special events and tell stories that matter.
            </p>
          </section>

          <section className="bg-zinc-900 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              We believe every moment has a story worth telling. Our mission is to transform these moments 
              into timeless documentaries that can be cherished for generations to come. Through professional 
              filmmaking and creative storytelling, we bring your memories to life.
            </p>
          </section>

          <section className="bg-zinc-900 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Why Choose Us</h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-yellow-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Professional equipment and experienced team</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-yellow-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Cinematic storytelling approach</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-yellow-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Quick turnaround times</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-yellow-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Customizable packages to suit your needs</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}