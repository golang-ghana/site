import React from 'react';
import { Mail, MapPin, Phone, Github, Twitter, Linkedin, MessageCircle } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const footerLinks = {
    community: [
      { name: 'About Us', href: '#about' },
      { name: 'Join Community', href: '#community' },
      { name: 'Code of Conduct', href: '#' },
      { name: 'Member Directory', href: '#' }
    ],
    resources: [
      { name: 'Learning Materials', href: '#resources' },
      { name: 'Blog', href: '#blog' },
      { name: 'Documentation', href: '#' },
      { name: 'Tutorials', href: '#' }
    ],
    events: [
      { name: 'Upcoming Events', href: '#events' },
      { name: 'Past Events', href: '#' },
      { name: 'Workshops', href: '#' },
      { name: 'Meetups', href: '#' }
    ],
    support: [
      { name: 'Contact Us', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Sponsor Us', href: '#' },
      { name: 'Volunteer', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/golang-ghana', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/golang-ghana/', label: 'LinkedIn' },
    { icon: MessageCircle, href: 'https://discord.gg/pdWC9fdtZa', label: 'Discord' },
    { icon: Phone, href: 'https://chat.whatsapp.com/Bk6aiPGt0qoAadpPMyG6XI', label: 'WhatsApp' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-6 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2">
              <Image
                src="/go-main-big-gh.png"
                alt="Golang Ghana Logo"
                width={36}
                height={36}
                className="rounded-sm"
              />

              <span className="text-xl font-bold text-gray-900 dark:text-white">Golang Ghana</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              A community of programmers, engineers and scientists who are passionate
              about Go and its essence to humanity.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400 text-sm">Accra, Ghana</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400 text-sm">hello@golangghana.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400 text-sm">+233 XX XXX XXXX</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              {footerLinks.community.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Events</h3>
            <ul className="space-y-2">
              {footerLinks.events.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest news, events, and resources delivered to your inbox.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-800 border border-gray-700 rounded-l-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-r-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Golang Ghana. All rights reserved. Built with ❤️ by the community.
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200 group"
              >
                <social.icon className="h-5 w-5 text-gray-400 group-hover:text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
