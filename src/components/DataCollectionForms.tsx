import { Link } from 'react-router-dom';

export default function DataCollectionForms() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold text-brand-dark mb-4">Data Collection & Forms</h1>
      <p className="text-lg text-gray-700 mb-6">
        Create intelligent forms for data collection with validation, conditional logic, and automated processing workflows. Capture, organize, and analyze data efficiently across your organization.
      </p>
      <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
        <li>Custom form creation</li>
        <li>Validation and conditional logic</li>
        <li>Automated data processing</li>
        <li>Integration with SharePoint and Microsoft 365</li>
        <li>Reporting and analytics</li>
      </ul>
      <div className="mt-8">
        <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-gold to-yellow-400 text-brand-dark font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
          Request Consultation
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
} 