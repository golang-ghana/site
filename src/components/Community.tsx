'use client';

import React from 'react';
import { Users, MessageCircle, Github, Linkedin, Twitter, Award, TrendingUp, Heart, Phone, ArrowRight } from 'lucide-react';

const Community = () => {
  const stats = [
    {
      icon: Users,
      number: '500+',
      label: 'Active Members',
      color: 'blue'
    },
    {
      icon: MessageCircle,
      number: '50+',
      label: 'Monthly Discussions',
      color: 'green'
    },
    {
      icon: Award,
      number: '25+',
      label: 'Events Hosted',
      color: 'purple'
    },
    {
      icon: TrendingUp,
      number: '95%',
      label: 'Member Satisfaction',
      color: 'orange'
    }
  ];

  const testimonials = [
    {
      name: 'Kwame Asante',
      role: 'Software Engineer at TechGhana',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=200',
      quote: 'Golang Ghana transformed my career. The community support and knowledge sharing here is incredible.',
      rating: 5
    },
    {
      name: 'Ama Osei',
      role: 'Backend Developer at GhanaFintech',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=200',
      quote: 'The workshops and mentorship I received helped me land my dream job. Forever grateful to this community.',
      rating: 5
    },
    {
      name: 'Kofi Mensah',
      role: 'Tech Lead at StartupAccra',
      image: 'https://images.pexels.com/photos/3785081/pexels-photo-3785081.jpeg?auto=compress&cs=tinysrgb&w=200',
      quote: 'Best tech community in Ghana! The networking opportunities and technical discussions are top-notch.',
      rating: 5
    }
  ];

  const communityChannels = [
    {
      icon: MessageCircle,
      name: 'Discord Community',
      description: 'Join our active Discord server for real-time discussions',
      members: '450+ members',
      color: 'indigo',
      href: 'https://discord.gg/pdWC9fdtZa',
    },
    {
      icon: Github,
      name: 'GitHub Organization',
      description: 'Collaborate on open source projects and code reviews',
      members: '200+ contributors',
      color: 'gray',
      href: 'https://github.com/golang-ghana',
    },
    {
      icon: Linkedin,
      name: 'LinkedIn Group',
      description: 'Professional networking and career opportunities',
      members: '300+ professionals',
      color: 'blue',
      href: 'https://www.linkedin.com/company/golang-ghana/',
    },
    {
      icon: Phone,
      name: 'WhatsApp Group',
      description: 'Chat and connect instantly with members',
      members: '600+ participants',
      color: 'green',
      href: 'https://chat.whatsapp.com/Bk6aiPGt0qoAadpPMyG6XI',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600',
      indigo: 'bg-indigo-100 text-indigo-600',
      gray: 'bg-gray-100 text-gray-600',
      sky: 'bg-sky-100 text-sky-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="community" className="py-20" style={{ background: 'var(--color-background)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
            Join Our Growing Community
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
            Connect with passionate Go developers across Ghana. Share knowledge, 
            collaborate on projects, and grow your career together.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: 'var(--color-primary-light)',
                  color: 'var(--color-primary)',
                }}
              >
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>{stat.number}</div>
              <div style={{ color: 'var(--color-text-secondary)' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Community Channels */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {communityChannels.map((channel, index) => (
            <a
              key={index}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl p-6 hover:shadow-lg transition-all duration-300 group flex flex-col h-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ background: 'var(--color-card)' }}
              aria-label={`Join our ${channel.name}`}
            >
              <div className="flex items-center mb-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: 'var(--color-primary-light)',
                    color: 'var(--color-primary)',
                  }}
                >
                  <channel.icon className="h-6 w-6" />
                </div>
                <span className="flex-1" />
                <button
                  tabIndex={-1}
                  type="button"
                  aria-label={`Go to ${channel.name}`}
                  className="ml-2 p-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600 transition-colors cursor-pointer"
                  onClick={e => { e.preventDefault(); window.open(channel.href, '_blank', 'noopener,noreferrer'); }}
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>{channel.name}</h3>
              <p className="text-sm mb-3 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{channel.description}</p>
              <div className="text-xs font-medium" style={{ color: 'var(--color-text-tertiary)' }}>{channel.members}</div>
            </a>
          ))}
        </div>

        {/* Testimonials */}
        {/* <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12" style={{ color: 'var(--color-text-primary)' }}>
            What Our Members Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                style={{ background: 'var(--color-card)' }}
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>{testimonial.name}</h4>
                    <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 flex items-center justify-center" style={{ color: 'var(--color-warning)' }}>
                      <Heart className="h-4 w-4 fill-current" />
                    </div>
                  ))}
                </div>
                <p className="leading-relaxed italic" style={{ color: 'var(--color-text-secondary)' }}>
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Join CTA */}
        <div
          className="rounded-2xl p-8 md:p-12 text-center"
          style={{
            background: 'linear-gradient(90deg, var(--color-primary), var(--color-primary-hover))',
            color: 'var(--color-card)',
          }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Ready to Be Part of Something Amazing?
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white">
            Join Golang Ghana today and connect with like-minded developers who are 
            passionate about building the future with Go.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <button
              className="px-8 py-3 cursor-pointer rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
              style={{ background: 'var(--color-card)', color: 'var(--color-primary)' }}
              onClick={e => { e.preventDefault(); document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              <Users className="mr-2 h-5 w-5" />
              Join Community
            </button>
            <button
              className="border-2 px-8 py-3 rounded-lg cursor-pointer font-semibold transition-colors duration-200"
              style={{ borderColor: 'var(--color-card)', color: 'var(--color-card)', background: 'transparent' }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;