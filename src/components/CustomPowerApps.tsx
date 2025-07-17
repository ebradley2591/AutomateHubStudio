import { Link } from 'react-router-dom';

export default function CustomPowerApps() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold text-brand-dark mb-4">Custom Power Apps</h1>
      <p className="text-lg text-gray-700 mb-6">
        Build powerful business applications without coding using Microsoft Power Platform and SharePoint integration. Digitize processes, automate tasks, and empower your team with custom solutions.
      </p>
      <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
        <li>Custom app development</li>
        <li>Integration with SharePoint and Teams</li>
        <li>Mobile and desktop support</li>
        <li>Process automation</li>
        <li>Role-based access control</li>
      </ul>
      <div className="mt-8">
        <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-gold to-yellow-400 text-brand-dark font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
          Request a Demo
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
} 