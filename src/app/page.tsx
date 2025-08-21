'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* AI Animation Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating Data Particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce delay-500"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-green-400 rounded-full animate-bounce delay-700"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white">Fairify</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}>About</a>
            <a href="#impact" className="text-gray-300 hover:text-white transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); document.getElementById('impact')?.scrollIntoView({ behavior: 'smooth' }); }}>Why Fairify</a>
            <a href="#principles" className="text-gray-300 hover:text-white transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); document.getElementById('principles')?.scrollIntoView({ behavior: 'smooth' }); }}>How It Works</a>
            <a href="mailto:info@fairify.ai" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="text-center py-20 px-6 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Your Data, Now{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              FAIR
            </span>
            {' '}and Everywhere.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          From silos to synergy — unlocking your data’s potential with FAIR. 
            Making your data Findable, Accessible, Interoperable, and Reusable with{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
              FAIR-ify
            </span> — turning your data into a trusted asset.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105">
              Get Started
            </button>
            <button 
              className="border-2 border-gray-400 text-gray-300 px-8 py-4 rounded-lg text-lg font-semibold hover:border-white hover:text-white transition-all cursor-pointer"
              onClick={() => document.getElementById('principles')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </button>
          </div>
        </section>

        {/* FAIR Principles Section */}
        <section id="principles" className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-8">
            With Fairify, Your Data Becomes...
          </h2>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-4xl mx-auto">
            Transform your data into FAIR-compliant assets effortlessly. We handle the heavy lifting - 
            scientists, researchers, and labs enjoy a seamless experience achieving FAIR data standards.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Findable',
                description: 'Easily discoverable by humans and machines.',
                icon: '🔍',
                color: 'from-blue-500 to-blue-600'
              },
              {
                title: 'Accessible',
                description: 'Available with the right access and permissions.',
                icon: '🔓',
                color: 'from-green-500 to-green-600'
              },
              {
                title: 'Interoperable',
                description: 'Seamlessly connects with other data and tools.',
                icon: '🔗',
                color: 'from-purple-500 to-purple-600'
              },
              {
                title: 'Reusable',
                description: 'Ready for research, learning, and innovation.',
                icon: '♻️',
                color: 'from-cyan-500 to-cyan-600'
              }
            ].map((principle, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all transform hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-r ${principle.color} rounded-lg flex items-center justify-center text-3xl mb-4`}>
                  {principle.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{principle.title}</h3>
                <p className="text-gray-300 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Impact Section */}
        <section id="impact" className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-8">
            Why Fairify?
          </h2>
          <p className="text-xl text-gray-300 text-center mb-16 max-w-4xl mx-auto">
            Non-FAIR data is costing economies billions and blocking innovation. See how Fairify solves these 
            critical challenges and unlocks unprecedented opportunities.
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-red-400 mb-2">€10.2 Billion</h3>
                  <p className="text-gray-300">Annual cost to the European economy due to non-FAIR research data</p>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">$3 Trillion</h3>
                  <p className="text-gray-300">Global data economy value</p>
                </div>
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-green-400 mb-2">25.2% CAGR</h3>
                  <p className="text-gray-300">GDPR services market growth rate</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">Why This Matters</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                The lack of FAIR data principles costs economies billions annually and hampers scientific progress. 
                Our technology addresses this critical gap by enabling secure, privacy-preserving data sharing.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                By implementing FAIR principles with privacy preserving manner, we can will help to unlock the full potential of your data.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">About Fairify.ai</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              We're developing cutting-edge technology with agentic AI to enable FAIR data sharing in a privacy-preserving manner, 
              bridging the gap between data accessibility and privacy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To democratize data access while preserving privacy through agentic AI, enabling researchers, businesses, and 
                organizations to leverage the power of FAIR data principles without compromising privacy.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Scientific community benefits</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Non-scientific community benefits</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Knowledge dissemination</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-white/10">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <h4 className="text-xl font-semibold text-white mb-2">Innovation at Scale</h4>
                  <p className="text-gray-300">
                    Building the future of data sharing with agentic AI-powered privacy protection
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-12 border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Make Your Data FAIR?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join us in revolutionizing how data is shared, accessed, and utilized while preserving privacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 cursor-pointer"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Your Journey
              </button>
              <a href="mailto:info@fairify.ai" className="border-2 border-gray-400 text-gray-300 px-8 py-4 rounded-lg text-lg font-semibold hover:border-white hover:text-white transition-all inline-block text-center">
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="py-12 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="text-center mb-6">
              <span className="text-2xl font-bold text-white">Fairify</span>
            </div>
            <p className="text-gray-400 mb-6">
              Your Data, Now FAIR and Everywhere.
            </p>
            <div className="flex justify-center space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="mailto:info@fairify.ai" className="hover:text-white transition-colors">info@fairify.ai</a>
            </div>
            <p className="text-gray-500 mt-6">
              © 2024 Fairify.ai. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
