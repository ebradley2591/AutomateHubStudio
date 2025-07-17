import React from 'react';
import policyIcon from '../assets/PolicyWebpartIcon.png';
import { Link } from 'react-router-dom';

export default function PolicyAcknowledgementTracker() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <div className="flex items-center mb-6">
        <img src={policyIcon} alt="Policy Acknowledgement Tracker Icon" className="w-14 h-14 mr-4 object-contain" />
        <h1 className="text-3xl font-bold text-brand-dark">Policy Acknowledgement Tracker</h1>
      </div>
      <p className="text-lg text-gray-700 mb-6">
        Streamline compliance management with our comprehensive policy tracking solution. Automate acknowledgements, track completion rates, and ensure regulatory compliance across your entire organization.
      </p>
      <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
        <li>SharePoint Integration</li>
        <li>Teams Notifications</li>
        <li>Automated Reminders</li>
        <li>Compliance Reporting</li>
        <li>Centralized policy management dashboard</li>
        <li>Real-time completion tracking</li>
        <li>Customizable approval workflows</li>
        <li>Comprehensive audit trails</li>
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