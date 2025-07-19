import { Routes, Route, Link, useLocation } from 'react-router-dom';
import headerLogo from './assets/HeaderLogo.png';
import heroLogo from './assets/HeroLogo.png';
import policyIcon from './assets/PolicyWebpartIcon.png';
import upworkLogo from './assets/UpworkLogo.png';
import gumroadLogo from './assets/GumroadLogo.png';
import PolicyAcknowledgementTracker from './components/PolicyAcknowledgementTracker';
import TrainingManagementSystem from './components/TrainingManagementSystem';
import ApprovalWorkflowAutomation from './components/ApprovalWorkflowAutomation';
import CustomPowerApps from './components/CustomPowerApps';
import DataCollectionForms from './components/DataCollectionForms';
import IncidentManagement from './components/IncidentManagement';
import PerformanceAnalytics from './components/PerformanceAnalytics';
import Checkout from './Checkout';
import ProductPage from './ProductPage';
import { useState, useEffect } from 'react';

// Google Fonts import for Montserrat (modern geometric sans-serif)
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

// Add smooth scrolling
document.documentElement.style.scrollBehavior = 'smooth';

function Home() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[60vh] pt-16 pb-24 bg-gradient-to-b from-blue-600 via-blue-400 to-white animate-fade-in" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
      <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
        <div className="flex items-center justify-center mb-6 hover:scale-105 transition-all duration-300">
          <img
            src={heroLogo}
            alt="AutomateHub Studio Logo"
            className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-lg"
            draggable="false"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-brand-dark mb-2 drop-shadow-lg tracking-tight animate-fade-in">
          AutomateHub Studio
        </h1>
        <div className="text-xl md:text-2xl font-semibold text-blue-800 mb-4 tracking-wide animate-fade-in delay-100">
          Automation Solutions
        </div>
        <p className="text-lg md:text-xl mb-8 text-brand-dark/80 max-w-xl text-center animate-fade-in delay-200">
          Modern solutions for SharePoint, Teams, and Microsoft 365. Streamline compliance, boost productivity, and unlock your organization's potential.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-300">
          <Link
            to="/contact"
            className="group relative px-8 py-4 bg-gradient-to-r from-brand-gold to-yellow-400 text-brand-dark font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand-gold focus:ring-opacity-50"
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-brand-gold rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          <Link
            to="/solutions"
            className="group relative px-8 py-4 border-2 border-brand-blue text-brand-blue font-semibold rounded-xl hover:bg-brand-blue hover:text-brand-white transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand-blue focus:ring-opacity-50"
          >
            <span className="relative z-10">Our Solutions</span>
            <div className="absolute inset-0 bg-brand-blue rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-brand-dark text-center">Our Solutions</h2>
      
      {/* Hero Section */}
      <div className="text-center mb-12">
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Ready-to-use templates and custom solutions that transform your Microsoft 365 environment. 
          Each solution is designed to solve real business problems with minimal setup time.
        </p>
      </div>

      {/* Featured Solution */}
      <div className="mb-16">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <img src={policyIcon} alt="Policy Acknowledgement Tracker Icon" className="w-12 h-12 mr-4 object-contain" />
                <h3 className="text-2xl font-bold text-brand-dark">Policy Acknowledgement Tracker</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                Streamline compliance management with our comprehensive policy tracking solution. 
                Automate acknowledgements, track completion rates, and ensure regulatory compliance 
                across your entire organization.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-600">SharePoint Integration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-600">Teams Notifications</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-600">Automated Reminders</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-600">Compliance Reporting</span>
                </div>
              </div>
              <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-brand-blue to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                Request a Demo
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="font-bold text-brand-dark mb-4">Key Features</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Centralized policy management dashboard</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Automated email and Teams notifications</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Real-time completion tracking</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Customizable approval workflows</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Comprehensive audit trails</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* All Solutions Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="group bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
          <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-brand-dark">Training Management System</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Track employee training completion, certifications, and skill development with automated reminders and progress reporting.</p>
          <Link to="/solutions/training-management-system" className="inline-flex items-center text-brand-blue font-medium hover:text-brand-gold transition-all duration-200 group-hover:translate-x-1">
            Learn More
            <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="group bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
          <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-brand-dark">Approval Workflow Automation</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Streamline approval processes for expenses, requests, and documents with customizable workflows and notifications.</p>
          <Link to="/solutions/approval-workflow-automation" className="inline-flex items-center text-brand-blue font-medium hover:text-brand-gold transition-all duration-200 group-hover:translate-x-1">
            Learn More
            <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="group bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
          <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-brand-dark">Custom Power Apps</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Build powerful business applications without coding using Microsoft Power Platform and SharePoint integration.</p>
          <Link to="/solutions/custom-power-apps" className="inline-flex items-center text-brand-blue font-medium hover:text-brand-gold transition-all duration-200 group-hover:translate-x-1">
            Learn More
            <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="group bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
          <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-brand-dark">Data Collection & Forms</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Create intelligent forms for data collection with validation, conditional logic, and automated processing workflows.</p>
          <Link to="/solutions/data-collection-forms" className="inline-flex items-center text-brand-blue font-medium hover:text-brand-gold transition-all duration-200 group-hover:translate-x-1">
            Learn More
            <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="group bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
          <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-brand-dark">Incident Management</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Track and manage incidents, issues, and support requests with automated escalation and resolution workflows.</p>
          <Link to="/solutions/incident-management" className="inline-flex items-center text-brand-blue font-medium hover:text-brand-gold transition-all duration-200 group-hover:translate-x-1">
            Learn More
            <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="group bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
          <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-brand-dark">Performance Analytics</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Monitor and analyze business processes with real-time dashboards, KPIs, and automated reporting.</p>
          <Link to="/solutions/performance-analytics" className="inline-flex items-center text-brand-blue font-medium hover:text-brand-gold transition-all duration-200 group-hover:translate-x-1">
            Learn More
            <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-brand-dark to-blue-900 text-white p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let's discuss how our solutions can streamline your processes and boost productivity. 
            Get a personalized demo tailored to your specific needs.
          </p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-gold to-yellow-400 text-brand-dark font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            Schedule a Consultation
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Ready-Made Solutions Section - HIDDEN FOR DEPLOYMENT */}
      {false && (
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Ready-Made Solutions</h3>
          <div className="flex justify-center">
            <div className="border rounded-lg shadow-lg w-full max-w-4xl bg-white flex flex-col items-center px-2 sm:px-6 py-8">
              <h4 className="text-lg sm:text-xl font-bold mb-2 text-center">KPI Dashboard Webpart Licenses</h4>
              <p className="text-gray-700 mb-6 text-center text-sm sm:text-base">
                Choose the license tier that fits your needs. All licenses are for 1 year and include updates and support.
              </p>
              <div className="flex flex-row flex-nowrap w-full gap-4 sm:gap-6">
                {[
                  {
                    id: "prod_Si4aZYRtrWx0j4",
                    name: "Core License",
                    description: "Basic features",
                    price: "$99.00/year",
                  },
                  {
                    id: "prod_Si4bUV7p5hGFVU",
                    name: "Professional License",
                    description: "Full features",
                    price: "$299.00/year",
                  },
                  {
                    id: "prod_Si4cFzwzgt98G6",
                    name: "Enterprise License",
                    description: "Source code, white-label",
                    price: "$999.00/year",
                  },
                ].map((tier) => (
                  <div
                    key={tier.id}
                    className="flex-1 flex flex-col items-center border rounded p-4 sm:p-6 h-full bg-gray-50 min-w-0"
                  >
                    <div className="font-semibold mb-1 text-center">{tier.name}</div>
                    <div className="text-gray-600 text-sm mb-2 text-center">{tier.description}</div>
                    <div className="text-lg sm:text-xl font-bold mb-4">{tier.price}</div>
                    <a
                      href={`/checkout?productId=${tier.id}`}
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition mt-auto"
                    >
                      Buy Now
                    </a>
                  </div>
                ))}
              </div>
              <div className="w-full mt-10 overflow-x-auto">
                <h5 className="text-lg font-semibold mb-4 text-center">Feature Comparison</h5>
                <table className="min-w-full border border-gray-200 rounded-lg bg-white text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-2 px-3 text-left font-bold">Feature</th>
                      <th className="py-2 px-3 font-bold">Core</th>
                      <th className="py-2 px-3 font-bold">Pro</th>
                      <th className="py-2 px-3 font-bold">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: "Basic Charts", core: true, pro: true, ent: true },
                      { feature: "Single List", core: true, pro: true, ent: true },
                      { feature: "Multiple Lists", core: false, pro: true, ent: true },
                      { feature: "Export", core: false, pro: true, ent: true },
                      { feature: "Drill-through", core: false, pro: true, ent: true },
                      { feature: "Advanced Branding", core: false, pro: true, ent: true },
                      { feature: "Logo Integration", core: false, pro: true, ent: true },
                      { feature: "Custom CSS", core: false, pro: false, ent: true },
                      { feature: "White-label", core: false, pro: false, ent: true },
                      { feature: "Source Code", core: false, pro: false, ent: true },
                      { feature: "Commercial Redistribution", core: false, pro: false, ent: true },
                      { feature: "Priority Support", core: false, pro: true, ent: true },
                    ].map((row) => (
                      <tr key={row.feature} className="border-t">
                        <td className="py-2 px-3 font-medium text-gray-700">{row.feature}</td>
                        {[row.core, row.pro, row.ent].map((val, idx) => (
                          <td key={idx} className="py-2 px-3 text-center">
                            {val ? (
                              <span className="inline-block text-green-600" title="Included">
                                <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                              </span>
                            ) : (
                              <span className="inline-block text-red-500" title="Not included">
                                <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                              </span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* End Ready-Made Solutions Section - HIDDEN FOR DEPLOYMENT */}
    </section>
  );
}

function About() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-brand-dark text-center">About AutomateHub Studio</h2>
      
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <img
            src={heroLogo}
            alt="AutomateHub Studio Logo"
            className="w-32 h-32 object-contain"
          />
        </div>
        <h3 className="text-2xl font-bold text-brand-dark mb-4">Empowering Organizations Through Intelligent Automation</h3>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          With over 7 years of experience building automation solutions for organizations of all sizes, 
          we've distilled our expertise into ready-to-use templates and custom solutions that solve real business problems.
        </p>
      </div>

      {/* Mission & Values */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <h4 className="text-xl font-bold text-brand-dark mb-4">Our Mission</h4>
          <p className="text-gray-700 leading-relaxed">
            To transform complex business processes into elegant, efficient workflows that save time, 
            reduce errors, and boost productivity. We believe every organization deserves access to 
            powerful automation tools that work seamlessly with their existing Microsoft 365 environment.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <h4 className="text-xl font-bold text-brand-dark mb-4">Our Approach</h4>
          <p className="text-gray-700 leading-relaxed">
            We combine deep technical expertise with a focus on user experience. Every solution we create 
            is meticulously designed, thoroughly tested, and comes with comprehensive documentation to 
            ensure successful implementation and adoption.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-brand-dark mb-8 text-center">What We Specialize In</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-bold text-brand-dark mb-2">Compliance Automation</h4>
            <p className="text-gray-600 text-sm">Streamline policy acknowledgements, training tracking, and regulatory compliance workflows.</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="font-bold text-brand-dark mb-2">Workflow Optimization</h4>
            <p className="text-gray-600 text-sm">Automate repetitive tasks, approval processes, and data collection to boost efficiency.</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="font-bold text-brand-dark mb-2">Custom Applications</h4>
            <p className="text-gray-600 text-sm">Build powerful business applications without coding using Microsoft Power Platform.</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gradient-to-r from-brand-dark to-blue-900 text-white p-8 rounded-xl">
        <h3 className="text-2xl font-bold mb-6 text-center">Why Choose AutomateHub Studio?</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-brand-dark" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Proven Track Record</h4>
              <p className="text-gray-300 text-sm">7+ years of successful implementations across various industries and organization sizes.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-brand-dark" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Rapid Implementation</h4>
              <p className="text-gray-300 text-sm">Our customers typically implement solutions in hours instead of weeks.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-brand-dark" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Comprehensive Support</h4>
              <p className="text-gray-300 text-sm">Detailed documentation, training materials, and ongoing support for successful adoption.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-brand-dark" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Microsoft 365 Native</h4>
              <p className="text-gray-300 text-sm">Built specifically for SharePoint, Teams, and Microsoft 365 environments.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4" id="contact">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-brand-dark text-center">Contact Us</h2>
      <form 
        action="https://usebasin.com/f/e00bfacd0e73"
        method="POST"
        className="space-y-6 bg-white p-8 rounded-xl shadow-lg border border-gray-100"
      >
        <div>
          <label className="block mb-2 font-semibold text-brand-dark">Name</label>
          <input 
            name="name" 
            type="text" 
            required 
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-200 hover:border-brand-blue" 
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-brand-dark">Email</label>
          <input 
            name="email" 
            type="email" 
            required 
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-200 hover:border-brand-blue" 
            placeholder="your.email@company.com"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-brand-dark">Message</label>
          <textarea 
            name="message" 
            required 
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-200 hover:border-brand-blue resize-none" 
            rows={4}
            placeholder="Tell us about your project..."
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="group relative w-full px-6 py-3 bg-gradient-to-r from-brand-blue to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand-blue focus:ring-opacity-50"
        >
          <span className="flex items-center justify-center">
            Send Message
            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </span>
        </button>
      </form>
    </section>
  );
}

function Blog() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-brand-dark text-center">Blog</h2>
      <p className="text-lg text-gray-600 text-center mb-12">
        Coming soon! We'll be sharing insights, tips, and updates about SharePoint automation and Microsoft 365 solutions.
      </p>
    </section>
  );
}

function Privacy() {
  // The HTML content from public/PrivacyPolicy.html
  const privacyHtml = `<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><title>Privacy Policy — AutomateHub Studio</title><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><style>body { font-family: Arial, sans-serif; margin: 2em; background: #fafbfc; color: #222; } .container { max-width: 800px; margin: auto; background: #fff; padding: 2em; border-radius: 12px; box-shadow: 0 2px 8px #0001; } h1 { color: #205081; font-size: 2.2em; margin-bottom: 0.2em; } h2 { color: #205081; font-size: 1.25em; margin-top: 1.5em; margin-bottom: 0.5em; font-weight: bold; } .section-title { color: #205081; font-size: 1.15em; font-weight: bold; margin-top: 1.5em; margin-bottom: 0.3em; } ul { margin-left: 1.5em; margin-bottom: 1em; } p { margin-bottom: 1em; } a { color: #205081; text-decoration: underline; } .effective-date { font-weight: bold; margin-bottom: 1.5em; } .contact-info { margin-top: 2em; } .contact-info strong { font-weight: bold; }</style></head><body><div class=\"container\"><h1>Privacy Policy</h1><p class=\"effective-date\">Effective Date: <em>July 15, 2025</em></p><p>This Privacy Policy describes how <strong>AutomateHub Studio</strong> (\"we\", \"us\", or \"our\") collects, uses, and protects your personal information when you use our website (e.g., Gumroad/Lemon Squeezy storefront, GitHub Pages), download our templates, contact us, or use our <strong>Policy Acknowledgement Tracker</strong> web part (\"the App\") in your Microsoft 365/SharePoint environment.</p><div class=\"section-title\">1. Information We Collect</div><ul><li><strong>Website/Storefront:</strong> Your name and email address when you voluntarily provide them (e.g., newsletter sign‑ups, support requests).</li><li><strong>Usage Data:</strong> Automated logs (e.g., IP address, browser, usage timestamps) generated by GitHub Pages or our storefront platforms.</li><li><strong>Web Part (App):</strong> The App stores and processes data only within your organization's Microsoft 365/SharePoint tenant. The App may access and display user profile information (such as name and email) as provided by Microsoft 365, solely for the purpose of tracking policy acknowledgements. The App does not collect, transmit, or store any personal data outside your Microsoft 365 environment.</li></ul><div class=\"section-title\">2. How We Use Your Data</div><ul><li>To deliver requested content (e.g., templates, guides).</li><li>To respond to support inquiries.</li><li>To send occasional updates or offers related to our services (with unsubscribe option).</li><li>To improve our products and website functionality.</li><li><strong>Web Part (App):</strong> Data is used only for the purpose of policy tracking and compliance within your organization. The App uses SharePoint lists to store policy information and user acknowledgements. No data is sent to third-party servers or external services.</li></ul><div class=\"section-title\">3. Data Sharing</div><p>We do <strong>not sell or rent</strong> your personal data. We may share data with:</p><ul><li><strong>Platform providers:</strong> GitHub, Gumroad, Lemon Squeezy (for hosting, purchases, licensing).</li><li><strong>Legal requirements:</strong> If required by law or to protect our rights.</li></ul><p><strong>Web Part (App):</strong> All data remains within your Microsoft 365 tenant and is subject to Microsoft's security and compliance standards. We do not have access to your data or your users' data.</p><div class=\"section-title\">4. Third‑Party Services</div><p>We use platforms that may collect limited information (e.g., IP address via GitHub Pages logs). Please refer to their privacy policies for details.</p><div class=\"section-title\">5. Your Rights</div><p>We respect your privacy rights under laws such as the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA), where applicable.</p><p>Depending on your location, you may have rights to access, rectify, or delete your personal data, or object to processing. To exercise these rights, please contact us at <a href=\"mailto:automatehubstudio@gmail.com\">automatehubstudio@gmail.com</a>.</p><p><strong>Web Part (App):</strong> You may remove the App at any time from your SharePoint environment and delete any data stored by the App in your SharePoint lists.</p><div class=\"section-title\">6. Cookies</div><p>We do not use cookies on GitHub Pages. Our storefront platforms may use cookies; please refer to their cookies policies.</p><div class=\"section-title\">7. Data Security</div><p>We implement appropriate measures to protect your data during transit and storage. However, no transmission over the Internet or electronic storage is 100% secure.</p><p><strong>Web Part (App):</strong> All data remains within your Microsoft 365 tenant and is protected by Microsoft's security and compliance standards.</p><div class=\"section-title\">8. Children's Privacy</div><p>Our services are not directed at children under 13. We do not knowingly collect personal data from minors.</p><div class=\"section-title\">9. Changes to This Policy</div><p>We may update this policy periodically. The <strong>effective date</strong> will reflect the latest version. We encourage you to review it occasionally.</p><div class=\"section-title\">10. Contact Us</div><div class=\"contact-info\"><p>For questions about Policy, contact:<br><strong>AutomateHub Studio</strong><br><a href=\"mailto:contact@automatehubstudio.com\">automatehubstudio@gmail.com</a><br><a href=\"https://www.automatehubstudio.com\" target=\"_blank\">AutomateHub Studio</a></p></div></div></body></html>`;
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <div dangerouslySetInnerHTML={{ __html: privacyHtml }} />
    </div>
  );
}

function TOS() {
  // The HTML content from public/TOS.html
  const tosHtml = `<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><title>Terms of Service - Policy Acknowledgement Tracker</title><style>body { font-family: Arial, sans-serif; margin: 2em; background: #fafbfc; color: #222; } h1, h2 { color: #205081; } .container { max-width: 800px; margin: auto; background: #fff; padding: 2em; border-radius: 8px; box-shadow: 0 2px 8px #0001; } ul { margin-left: 1.5em; } code { background: #f4f4f4; padding: 2px 4px; border-radius: 3px; }</style></head><body><div class=\"container\"><h1>Terms of Service</h1><p><strong>Effective Date:</strong> <em>July 15, 2025</em></p><p>These Terms of Service (\u201cTerms\u201d) govern your use of the <strong>Policy Acknowledgement Tracker</strong> web part (\u201cthe App\u201d). By installing or using the App, you agree to these Terms.</p><h2>1. License</h2><ul><li>You are granted a non-exclusive, non-transferable license to use the App within your Microsoft 365/SharePoint environment.</li><li>You may not resell, sublicense, or distribute the App to third parties without written permission.</li></ul><h2>2. Use of the App</h2><ul><li>The App is provided for the purpose of tracking policy acknowledgements within your organization.</li><li>You are responsible for configuring and managing the App and any data stored in your SharePoint environment.</li></ul><h2>3. Support</h2><ul><li>Support is provided as described in the documentation or on our website.</li><li>We may offer additional support or services under separate agreement.</li></ul><h2>4. Disclaimer</h2><ul><li>The App is provided \u201cas is\u201d without warranty of any kind, either express or implied.</li><li>We do not guarantee that the App will be error-free or uninterrupted.</li><li>You are responsible for compliance with all applicable laws and regulations.</li></ul><h2>5. Limitation of Liability</h2><ul><li>To the maximum extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising from the use of the App.</li></ul><h2>6. Changes to Terms</h2><p>We may update these Terms from time to time. Updates will be posted on our website or provided with the App.</p><h2>7. Contact</h2><p>For questions about these Terms, contact:<br><strong>AutomateHub Studio</strong><br><a href=\"mailto:contact@automatehubstudio.com\">automatehubstudio@gmail.com</a><br><a href=\"https://www.automatehubstudio.com\" target=\"_blank\">AutomateHub Studio</a></p></div></body></html>`;
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <div dangerouslySetInnerHTML={{ __html: tosHtml }} />
    </div>
  );
}

// Scroll to Top Button Component
function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-brand-blue to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand-blue focus:ring-opacity-50 group"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6 mx-auto transform group-hover:-translate-y-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </>
  );
}

function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMobileMenuOpen && !target.closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-brand-blue to-blue-800 text-brand-white shadow-xl border-b border-blue-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-5">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16">
              <img
                src={headerLogo}
                alt="AutomateHub Studio Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <Link to="/" className="text-xl md:text-2xl font-bold tracking-tight hover:text-brand-gold transition-colors duration-200">
                AutomateHub Studio
              </Link>
              <span className="text-xs md:text-sm text-blue-200 font-medium tracking-wide">Automation Solutions</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              to="/solutions" 
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 relative ${
                isActive('/solutions') 
                  ? 'text-brand-gold bg-blue-700/50' 
                  : 'hover:text-brand-gold hover:bg-blue-700/30'
              }`}
            >
              Solutions
              {isActive('/solutions') && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-gold transform scale-x-100 transition-transform duration-200"></div>
              )}
            </Link>
            <Link 
              to="/about" 
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 relative ${
                isActive('/about') 
                  ? 'text-brand-gold bg-blue-700/50' 
                  : 'hover:text-brand-gold hover:bg-blue-700/30'
              }`}
            >
              About
              {isActive('/about') && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-gold transform scale-x-100 transition-transform duration-200"></div>
              )}
            </Link>
            <Link 
              to="/contact" 
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 relative ${
                isActive('/contact') 
                  ? 'text-brand-gold bg-blue-700/50' 
                  : 'hover:text-brand-gold hover:bg-blue-700/30'
              }`}
            >
              Contact
              {isActive('/contact') && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-gold transform scale-x-100 transition-transform duration-200"></div>
              )}
            </Link>
            <Link 
              to="/blog" 
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 relative ${
                isActive('/blog') 
                  ? 'text-brand-gold bg-blue-700/50' 
                  : 'hover:text-brand-gold hover:bg-blue-700/30'
              }`}
            >
              Blog
              {isActive('/blog') && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-gold transform scale-x-100 transition-transform duration-200"></div>
              )}
            </Link>
            <div className="ml-4 pl-4 border-l border-blue-600">
              <Link 
                to="/contact" 
                className="px-6 py-2 bg-gradient-to-r from-brand-gold to-yellow-400 text-brand-dark font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-3 hover:bg-blue-700 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-gold"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-80 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="py-6 space-y-2 border-t border-blue-600 bg-blue-800/50 rounded-b-lg">
            <Link 
              to="/solutions" 
              className={`block px-4 py-3 font-semibold transition-all duration-200 rounded-lg mx-2 ${
                isActive('/solutions') 
                  ? 'text-brand-gold bg-blue-700/50' 
                  : 'hover:text-brand-gold hover:bg-blue-700/30'
              }`}
            >
              Solutions
            </Link>
            <Link 
              to="/about" 
              className={`block px-4 py-3 font-semibold transition-all duration-200 rounded-lg mx-2 ${
                isActive('/about') 
                  ? 'text-brand-gold bg-blue-700/50' 
                  : 'hover:text-brand-gold hover:bg-blue-700/30'
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`block px-4 py-3 font-semibold transition-all duration-200 rounded-lg mx-2 ${
                isActive('/contact') 
                  ? 'text-brand-gold bg-blue-700/50' 
                  : 'hover:text-brand-gold hover:bg-blue-700/30'
              }`}
            >
              Contact
            </Link>
            <Link 
              to="/blog" 
              className={`block px-4 py-3 font-semibold transition-all duration-200 rounded-lg mx-2 ${
                isActive('/blog') 
                  ? 'text-brand-gold bg-blue-700/50' 
                  : 'hover:text-brand-gold hover:bg-blue-700/30'
              }`}
            >
              Blog
            </Link>
            {/* <Link to="/testimonials" className={`text-brand-dark hover:text-brand-gold transition-colors duration-200 ${isActive('/testimonials') ? 'text-brand-gold font-semibold' : ''}`}>
              Testimonials
            </Link> */}
            <div className="px-4 pt-2">
              <Link 
                to="/contact" 
                className="block w-full px-6 py-3 bg-gradient-to-r from-brand-gold to-yellow-400 text-brand-dark font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

/*
// AccordionSection component for collapsible sections
interface AccordionSectionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}
const AccordionSection = ({ title, children, defaultOpen = false }: AccordionSectionProps) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b last:border-b-0">
      <button
        className="w-full flex justify-between items-center py-3 px-2 font-semibold text-left text-green-700 hover:bg-green-50 transition"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span>{title}</span>
        <span className="ml-2">{open ? "▲" : "▼"}</span>
      </button>
      {open && <div className="px-4 pb-4">{children}</div>}
    </div>
  );
};
*/

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-white text-brand-dark" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
      <Navigation />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/policy-acknowledgement-tracker" element={<PolicyAcknowledgementTracker />} />
          <Route path="/solutions/training-management-system" element={<TrainingManagementSystem />} />
          <Route path="/solutions/approval-workflow-automation" element={<ApprovalWorkflowAutomation />} />
          <Route path="/solutions/custom-power-apps" element={<CustomPowerApps />} />
          <Route path="/solutions/data-collection-forms" element={<DataCollectionForms />} />
          <Route path="/solutions/incident-management" element={<IncidentManagement />} />
          <Route path="/solutions/performance-analytics" element={<PerformanceAnalytics />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/tos" element={<TOS />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/products" element={<ProductPage />} />
        </Routes>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-b from-brand-dark to-gray-900 text-brand-white mt-auto">
        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-16 h-16">
                  <img
                    src={headerLogo}
                    alt="AutomateHub Studio Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-gold">AutomateHub Studio</h3>
                  <p className="text-sm text-gray-300">Automation Solutions</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Modern solutions for SharePoint, Teams, and Microsoft 365. Streamline compliance, boost productivity, and unlock your organization's potential.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/company/automatehub-studio" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.upwork.com/freelancers/~013b95c303ee223ff2?mp_source=share" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  aria-label="Upwork"
                >
                  <img 
                    src={upworkLogo} 
                    alt="Upwork" 
                    className="w-full h-full object-contain"
                  />
                </a>
                <a 
                  href="https://automatehubstudio.gumroad.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group w-10 h-10 bg-pink-500 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  aria-label="Gumroad"
                >
                  <img 
                    src={gumroadLogo} 
                    alt="Gumroad" 
                    className="w-full h-full object-contain"
                  />
                </a>
                <a 
                  href="mailto:contact@automatehubstudio.com" 
                  className="group w-10 h-10 bg-brand-gold hover:bg-yellow-400 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  aria-label="Email"
                >
                  <svg className="w-5 h-5 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-brand-gold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/solutions" className="text-gray-300 hover:text-brand-gold transition-colors duration-200 flex items-center group">
                    <svg className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-brand-gold transition-colors duration-200 flex items-center group">
                    <svg className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-brand-gold transition-colors duration-200 flex items-center group">
                    <svg className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-brand-gold transition-colors duration-200 flex items-center group">
                    <svg className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Request Demo
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h4 className="text-lg font-semibold text-brand-gold mb-4">Stay Updated</h4>
              <p className="text-gray-300 mb-4 text-sm">Get the latest updates on our solutions and industry insights.</p>
              <form 
                action="https://assets.mailerlite.com/jsonp/1672306/forms/160173045237941629/subscribe"
                method="post"
                target="_blank"
                rel="noopener noreferrer"
                className="space-y-3"
              >
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your email address" 
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
                />
                <label className="flex items-center space-x-2 text-xs text-gray-400">
                  <input type="checkbox" name="gdpr" required />
                  <span>I agree to receive emails from AutomateHub Studio.</span>
                </label>
                <button 
                  type="submit" 
                  className="w-full px-4 py-2 bg-gradient-to-r from-brand-gold to-yellow-400 text-brand-dark font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-opacity-50"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700">
          <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-wrap justify-center md:justify-start space-x-6 text-sm">
                <a href="/PrivacyPolicy.html" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold transition-colors duration-200">Privacy Policy</a>
                <a href="/TOS.html" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold transition-colors duration-200">Terms of Service</a>
                <a href="/CookiePolicy.html" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold transition-colors duration-200">Cookie Policy</a>
                <a href="/Accessibility.html" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold transition-colors duration-200">Accessibility</a>
              </div>
              <div className="text-sm text-gray-400 text-center md:text-right">
                &copy; {new Date().getFullYear()} AutomateHub Studio. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  );
}

export default App;
