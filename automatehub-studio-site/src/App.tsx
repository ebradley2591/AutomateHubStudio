import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import headerLogo from './assets/HeaderLogo.png';
import heroLogo from './assets/HeroLogo.png';
import policyIcon from './assets/PolicyWebpartIcon.png';
import upworkLogo from './assets/UpworkLogo.png';
import gumroadLogo from './assets/GumroadLogo.png';

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
          <Link to="/contact" className="inline-flex items-center text-brand-blue font-medium hover:text-brand-gold transition-all duration-200 group-hover:translate-x-1">
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
          <Link to="/contact" className="inline-flex items-center text-brand-blue font-medium hover:text-brand-gold transition-all duration-200 group-hover:translate-x-1">
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
          <Link to="/contact" className="inline-flex items-center text-brand-blue font-medium hover:text-brand-gold transition-all duration-200 group-hover:translate-x-1">
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
          <Link to="/contact" className="inline-flex items-center text-brand-blue font-medium hover:text-brand-gold transition-all duration-200 group-hover:translate-x-1">
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
          <Link to="/contact" className="inline-flex items-center text-brand-blue font-medium hover:text-brand-gold transition-all duration-200 group-hover:translate-x-1">
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
          <Link to="/contact" className="inline-flex items-center text-brand-blue font-medium hover:text-brand-gold transition-all duration-200 group-hover:translate-x-1">
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="max-w-3xl mx-auto py-16 px-4" id="contact">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-brand-dark text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <div>
          <label className="block mb-2 font-semibold text-brand-dark">Name</label>
          <input 
            name="name" 
            type="text" 
            required 
            value={formData.name}
            onChange={handleInputChange}
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
            value={formData.email}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-200 hover:border-brand-blue" 
            placeholder="your.email@company.com"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-brand-dark">Message</label>
          <textarea 
            name="message" 
            required 
            value={formData.message}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-200 hover:border-brand-blue resize-none" 
            rows={4}
            placeholder="Tell us about your project..."
          ></textarea>
        </div>
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="group relative w-full px-6 py-3 bg-gradient-to-r from-brand-blue to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand-blue focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            <span className="flex items-center justify-center">
              Send Message
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </span>
          )}
        </button>
      </form>
    </section>
  );
}

function Blog() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-brand-dark text-center">Blog & Insights</h2>
      
      {/* Hero Section */}
      <div className="text-center mb-12">
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Stay updated with the latest trends in Microsoft 365 automation, SharePoint best practices, 
          and tips for boosting your organization's productivity.
        </p>
      </div>

      {/* Featured Post */}
      <div className="mb-16">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block bg-brand-gold text-brand-dark px-3 py-1 rounded-full text-sm font-semibold mb-4">
                Featured
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">
                The Complete Guide to SharePoint Policy Management
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Learn how to implement effective policy management workflows in SharePoint that ensure 
                compliance while reducing administrative overhead. This comprehensive guide covers 
                everything from setup to advanced automation techniques.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-6">
                <span>📅 March 15, 2024</span>
                <span>⏱️ 8 min read</span>
                <span>🏷️ SharePoint, Compliance</span>
              </div>
              <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-brand-blue to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                Read Full Article
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="font-bold text-brand-dark mb-4">What You'll Learn</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Setting up automated policy workflows</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Best practices for compliance tracking</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Integration with Microsoft Teams</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Advanced reporting and analytics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-3">
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">Power Automate</span>
              <span className="text-gray-500 text-sm">March 10, 2024</span>
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-3">5 Power Automate Flows Every Business Needs</h3>
            <p className="text-gray-600 mb-4">Discover the essential automation workflows that can transform your business processes and boost productivity.</p>
            <button className="text-brand-blue font-semibold hover:text-brand-gold transition-colors duration-200">
              Read More →
            </button>
          </div>
        </article>

        <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-3">
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">Power Apps</span>
              <span className="text-gray-500 text-sm">March 5, 2024</span>
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-3">Building Custom Apps Without Code</h3>
            <p className="text-gray-600 mb-4">Learn how to create powerful business applications using Microsoft Power Apps and SharePoint integration.</p>
            <button className="text-brand-blue font-semibold hover:text-brand-gold transition-colors duration-200">
              Read More →
            </button>
          </div>
        </article>

        <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-3">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">Teams</span>
              <span className="text-gray-500 text-sm">February 28, 2024</span>
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-3">Microsoft Teams Integration Best Practices</h3>
            <p className="text-gray-600 mb-4">Maximize the value of Microsoft Teams with these proven integration strategies and automation techniques.</p>
            <button className="text-brand-blue font-semibold hover:text-brand-gold transition-colors duration-200">
              Read More →
            </button>
          </div>
        </article>

        <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-3">
              <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-semibold">Analytics</span>
              <span className="text-gray-500 text-sm">February 20, 2024</span>
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-3">Data-Driven Decision Making with Power BI</h3>
            <p className="text-gray-600 mb-4">Transform your business data into actionable insights with Power BI dashboards and automated reporting.</p>
            <button className="text-brand-blue font-semibold hover:text-brand-gold transition-colors duration-200">
              Read More →
            </button>
          </div>
        </article>

        <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="h-48 bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
            </svg>
          </div>
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-3">
              <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded-full text-xs font-semibold">Security</span>
              <span className="text-gray-500 text-sm">February 15, 2024</span>
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-3">Securing Your SharePoint Environment</h3>
            <p className="text-gray-600 mb-4">Essential security practices and automation tools to protect your SharePoint data and ensure compliance.</p>
            <button className="text-brand-blue font-semibold hover:text-brand-gold transition-colors duration-200">
              Read More →
            </button>
          </div>
        </article>

        <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="h-48 bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-3">
              <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">ROI</span>
              <span className="text-gray-500 text-sm">February 10, 2024</span>
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-3">Measuring Automation ROI</h3>
            <p className="text-gray-600 mb-4">How to calculate and demonstrate the return on investment for your automation initiatives.</p>
            <button className="text-brand-blue font-semibold hover:text-brand-gold transition-colors duration-200">
              Read More →
            </button>
          </div>
        </article>
      </div>

      {/* Newsletter Signup */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-brand-dark to-blue-900 text-white p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get the latest insights on Microsoft 365 automation, SharePoint tips, and productivity hacks 
            delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-3 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-brand-gold to-yellow-400 text-brand-dark font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-brand-dark text-center">What Our Clients Say</h2>
      
      {/* Hero Section */}
      <div className="text-center mb-12">
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Don't just take our word for it. Here's what organizations are saying about how our solutions 
          have transformed their business processes and boosted productivity.
        </p>
      </div>

      {/* Featured Testimonial */}
      <div className="mb-16">
        <div className="bg-gradient-to-r from-brand-gold to-yellow-400 p-8 rounded-2xl text-brand-dark">
          <div className="text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-brand-gold" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
            <blockquote className="text-xl font-semibold mb-6 leading-relaxed">
              "AutomateHub Studio's Policy Acknowledgement Tracker transformed our compliance process. 
              What used to take weeks now happens in hours. The automated reminders and reporting features 
              have saved us countless hours of manual work."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-brand-dark font-bold text-lg">JD</span>
              </div>
              <div className="text-left">
                <div className="font-semibold">John Davis</div>
                <div className="text-sm opacity-80">IT Director, TechCorp Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          <blockquote className="text-gray-700 mb-6 leading-relaxed">
            "The approval workflow automation has streamlined our entire process. We've reduced approval 
            times by 80% and eliminated the need for manual follow-ups."
          </blockquote>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-blue-600 font-semibold text-sm">SM</span>
            </div>
            <div>
              <div className="font-semibold text-brand-dark">Sarah Mitchell</div>
              <div className="text-sm text-gray-600">Operations Manager, InnovateTech</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          <blockquote className="text-gray-700 mb-6 leading-relaxed">
            "The custom Power App they built for us has revolutionized how we collect and process data. 
            The user interface is intuitive and the automation features are game-changing."
          </blockquote>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-green-600 font-semibold text-sm">RJ</span>
            </div>
            <div>
              <div className="font-semibold text-brand-dark">Robert Johnson</div>
              <div className="text-sm text-gray-600">CTO, DataFlow Systems</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          <blockquote className="text-gray-700 mb-6 leading-relaxed">
            "Implementation was incredibly smooth. The team provided excellent documentation and support, 
            making the transition seamless for our organization."
          </blockquote>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-purple-600 font-semibold text-sm">LW</span>
            </div>
            <div>
              <div className="font-semibold text-brand-dark">Lisa Wang</div>
              <div className="text-sm text-gray-600">HR Director, Global Enterprises</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          <blockquote className="text-gray-700 mb-6 leading-relaxed">
            "The ROI was immediate. We've saved over 20 hours per week on manual processes and improved 
            our compliance reporting accuracy to 100%."
          </blockquote>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-orange-600 font-semibold text-sm">MC</span>
            </div>
            <div>
              <div className="font-semibold text-brand-dark">Michael Chen</div>
              <div className="text-sm text-gray-600">Finance Manager, SecureBank</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          <blockquote className="text-gray-700 mb-6 leading-relaxed">
            "The training management system has made it so much easier to track employee development. 
            The automated reminders ensure no one misses important training deadlines."
          </blockquote>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-teal-600 font-semibold text-sm">AK</span>
            </div>
            <div>
              <div className="font-semibold text-brand-dark">Amanda Kim</div>
              <div className="text-sm text-gray-600">Training Coordinator, EduCorp</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          <blockquote className="text-gray-700 mb-6 leading-relaxed">
            "The incident management solution has improved our response times dramatically. The automated 
            escalation and reporting features are exactly what we needed."
          </blockquote>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-red-600 font-semibold text-sm">DP</span>
            </div>
            <div>
              <div className="font-semibold text-brand-dark">David Patel</div>
              <div className="text-sm text-gray-600">IT Manager, HealthTech Inc</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-brand-dark to-blue-900 text-white p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            See how our solutions can transform your organization's processes and boost productivity. 
            Schedule a personalized demo today.
          </p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-gold to-yellow-400 text-brand-dark font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            Get Started Today
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Privacy() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4" id="privacy">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-brand-dark text-center">Privacy Policy</h2>
      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
        <p>This is a placeholder for your Privacy Policy. Please update with your actual policy before going live.</p>
      </div>
    </section>
  );
}

function TOS() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4" id="tos">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-brand-dark text-center">Terms of Service</h2>
      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
        <p>This is a placeholder for your Terms of Service. Please update with your actual terms before going live.</p>
      </div>
    </section>
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
            <Link 
              to="/testimonials" 
              className={`block px-4 py-3 font-semibold transition-all duration-200 rounded-lg mx-2 ${
                isActive('/testimonials') 
                  ? 'text-brand-gold bg-blue-700/50' 
                  : 'hover:text-brand-gold hover:bg-blue-700/30'
              }`}
            >
              Testimonials
            </Link>
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

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-white text-brand-dark" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
      <Navigation />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/tos" element={<TOS />} />
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
                  <a href="#demo" className="text-gray-300 hover:text-brand-gold transition-colors duration-200 flex items-center group">
                    <svg className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Request Demo
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h4 className="text-lg font-semibold text-brand-gold mb-4">Stay Updated</h4>
              <p className="text-gray-300 mb-4 text-sm">Get the latest updates on our solutions and industry insights.</p>
              <form className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
                />
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
                <Link to="/privacy" className="text-gray-400 hover:text-brand-gold transition-colors duration-200">Privacy Policy</Link>
                <Link to="/tos" className="text-gray-400 hover:text-brand-gold transition-colors duration-200">Terms of Service</Link>
                <a href="#cookies" className="text-gray-400 hover:text-brand-gold transition-colors duration-200">Cookie Policy</a>
                <a href="#accessibility" className="text-gray-400 hover:text-brand-gold transition-colors duration-200">Accessibility</a>
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
