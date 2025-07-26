import React from 'react';
import { ArrowRight, Users, Code, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section
      className="relative py-20 transition-colors duration-200"
      style={{
        background: `linear-gradient(135deg, var(--color-background-secondary), var(--color-background))`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1
              className="text-4xl md:text-6xl font-bold leading-tight transition-colors duration-200"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Welcome to{' '}
              <span style={{ color: 'var(--color-primary)' }}>Golang Ghana</span>
            </h1>
            
            <p
              className="text-xl leading-relaxed transition-colors duration-200"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              A community of programmers, engineers and scientists who are passionate about Go 
              and its essence to humanity. Join us in building the future with Go.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center group"
                style={{
                  background: 'var(--color-primary)',
                  color: 'var(--color-card)',
                }}
              >
                Join Our Community
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                className="border-2 px-8 py-3 rounded-lg font-semibold transition-all duration-200"
                style={{
                  borderColor: 'var(--color-primary)',
                  color: 'var(--color-primary)',
                  background: 'var(--color-card)',
                }}
              >
                View Resources
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5" style={{ color: 'var(--color-primary)' }} />
                <span style={{ color: 'var(--color-text-secondary)' }}>500+ Members</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code className="h-5 w-5" style={{ color: 'var(--color-primary)' }} />
                <span style={{ color: 'var(--color-text-secondary)' }}>Weekly Meetups</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5" style={{ color: 'var(--color-primary)' }} />
                <span style={{ color: 'var(--color-text-secondary)' }}>Ghana Wide</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              className="rounded-2xl shadow-xl p-8 transform rotate-3 hover:rotate-0 transition-all duration-300"
              style={{ background: 'var(--color-card)' }}
            >
              <img 
                src="/peeps2.png" 
                alt="Developers collaborating" 
                className="w-full h-90 object-cover rounded-lg"
              />
              <div className="mt-6">
                <h3
                  className="text-xl font-semibold"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  Building Together
                </h3>
                <p
                  className="mt-2"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  Passionate developers creating amazing solutions with Go
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;