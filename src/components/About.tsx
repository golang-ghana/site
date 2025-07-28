import React from 'react';
import { Target, Heart, Lightbulb, Rocket } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Purpose Driven',
      description: 'We believe in using Go to solve real-world problems and create meaningful impact in our communities.'
    },
    {
      icon: Heart,
      title: 'Passionate Community',
      description: 'Our members are driven by genuine passion for Go programming and its potential to transform lives.'
    },
    {
      icon: Lightbulb,
      title: 'Knowledge Sharing',
      description: 'We foster an environment of continuous learning and knowledge exchange among our members.'
    },
    {
      icon: Rocket,
      title: 'Innovation Focus',
      description: 'We encourage innovative thinking and cutting-edge solutions using Go technologies.'
    }
  ];

  return (
    <section id="about" className="py-20" style={{ background: 'var(--color-background)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
            About Golang Ghana
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
            Golang Ghana is a community of programmers, engineers and scientists who are 
            passionate about Go and its essence to humanity. We bring together like-minded 
            individuals to learn, share knowledge, and build amazing things together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="rounded-xl p-6 transition-colors duration-300 group"
              style={{ background: 'var(--color-card)' }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300"
                style={{ background: 'var(--color-primary-light)' }}
              >
                <value.icon className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>{value.title}</h3>
              <p className="leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{value.description}</p>
            </div>
          ))}
        </div>

        <div
          className="mt-16 rounded-2xl p-8 md:p-12"
          style={{
            background: 'linear-gradient(90deg, var(--color-primary), var(--color-primary-hover))',
            color: 'var(--color-card)',
          }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Ready to Join Our Community?
              </h3>
              <p className="text-lg text-white">
                Connect with fellow Go enthusiasts, attend our events, and be part of 
                Ghana's growing Go programming community.
              </p>
            </div>
            <div className="text-center md:text-right">
              <button
                className="px-8 py-3 rounded-lg font-semibold text-white cursor-pointer transition-colors duration-200"
                style={{ background: 'var(--color-card)', color: 'var(--color-primary)' }}
              >
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;