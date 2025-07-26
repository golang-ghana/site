'use client';

import React, { useState } from 'react';
import { Calendar, MapPin, Users, Search, Filter, Play, Download, Star } from 'lucide-react';

const PastEvents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');

  const eventTypes = ['All', 'Workshop', 'Meetup', 'Conference', 'Bootcamp', 'Networking'];

  const pastEvents = [
    {
      id: 1,
      title: 'Go Fundamentals Bootcamp',
      date: 'Dec 10, 2024',
      location: 'University of Ghana, Legon',
      attendees: 65,
      type: 'Bootcamp',
      duration: '2 days',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Intensive 2-day bootcamp covering Go fundamentals, from basic syntax to advanced concepts.',
      rating: 4.8,
      hasRecording: true,
      hasMaterials: true,
      highlights: [
        'Go syntax and data structures',
        'Concurrency with goroutines',
        'Building web applications',
        'Testing and debugging'
      ]
    },
    {
      id: 2,
      title: 'Building Microservices with Go',
      date: 'Nov 25, 2024',
      location: 'Tech Hub Accra',
      attendees: 52,
      type: 'Workshop',
      duration: '4 hours',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Hands-on workshop on designing and implementing microservices architecture using Go.',
      rating: 4.9,
      hasRecording: true,
      hasMaterials: true,
      highlights: [
        'Microservices design patterns',
        'API Gateway implementation',
        'Service discovery',
        'Monitoring and logging'
      ]
    },
    {
      id: 3,
      title: 'Go Community Networking Event',
      date: 'Nov 15, 2024',
      location: 'Impact Hub Accra',
      attendees: 89,
      type: 'Networking',
      duration: '3 hours',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Networking event bringing together Go developers from across Ghana for knowledge sharing.',
      rating: 4.7,
      hasRecording: false,
      hasMaterials: false,
      highlights: [
        'Industry networking',
        'Lightning talks',
        'Career opportunities',
        'Community building'
      ]
    },
    {
      id: 4,
      title: 'Go Performance Optimization Workshop',
      date: 'Oct 28, 2024',
      location: 'Virtual Event',
      attendees: 78,
      type: 'Workshop',
      duration: '3 hours',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Deep dive into Go performance optimization techniques and profiling tools.',
      rating: 4.9,
      hasRecording: true,
      hasMaterials: true,
      highlights: [
        'Profiling and benchmarking',
        'Memory optimization',
        'CPU optimization',
        'Real-world case studies'
      ]
    },
    {
      id: 5,
      title: 'Monthly Go Meetup - October',
      date: 'Oct 15, 2024',
      location: 'MEST Africa',
      attendees: 43,
      type: 'Meetup',
      duration: '2 hours',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Monthly community meetup featuring talks on Go best practices and community updates.',
      rating: 4.6,
      hasRecording: true,
      hasMaterials: false,
      highlights: [
        'Community updates',
        'Technical presentations',
        'Q&A sessions',
        'Networking'
      ]
    },
    {
      id: 6,
      title: 'Go in Production: Scaling Web Applications',
      date: 'Sep 20, 2024',
      location: 'Ashesi University',
      attendees: 95,
      type: 'Conference',
      duration: '1 day',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Full-day conference on scaling Go applications in production environments.',
      rating: 4.8,
      hasRecording: true,
      hasMaterials: true,
      highlights: [
        'Production deployment strategies',
        'Load balancing and scaling',
        'Monitoring and observability',
        'Case studies from industry'
      ]
    }
  ];

  const filteredEvents = pastEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All' || event.type === selectedType;
    return matchesSearch && matchesType;
  });

  const totalAttendees = pastEvents.reduce((sum, event) => sum + event.attendees, 0);
  const averageRating = pastEvents.reduce((sum, event) => sum + event.rating, 0) / pastEvents.length;

  return (
    <div className="min-h-screen transition-colors duration-200" style={{ background: 'var(--color-background)' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(90deg, var(--color-primary), var(--color-primary-hover))' }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-card)' }}>
            Past Events
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto" style={{ color: 'var(--color-primary-light)' }}>
            Explore our archive of workshops, meetups, and conferences that have helped 
            shape Ghana's Go programming community.
          </p>
          
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-white">{pastEvents.length}</div>
              <div className="text-purple-100">Events Hosted</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-white">{totalAttendees}</div>
              <div className="text-purple-100">Total Attendees</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-white">{averageRating.toFixed(1)}</div>
              <div className="text-purple-100">Average Rating</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search past events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            
            {/* Type Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none cursor-pointer"
              >
                {eventTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Type Pills */}
          <div className="flex flex-wrap gap-2">
            {eventTypes.map(type => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedType === type
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredEvents.map((event) => (
            <div 
              key={event.id}
              className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <img 
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    event.type === 'Workshop' ? 'bg-blue-100 text-blue-600' :
                    event.type === 'Meetup' ? 'bg-green-100 text-green-600' :
                    event.type === 'Conference' ? 'bg-purple-100 text-purple-600' :
                    event.type === 'Bootcamp' ? 'bg-orange-100 text-orange-600' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {event.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex items-center space-x-2">
                  {event.hasRecording && (
                    <div className="bg-red-100 text-red-600 p-2 rounded-full">
                      <Play className="h-4 w-4" />
                    </div>
                  )}
                  {event.hasMaterials && (
                    <div className="bg-green-100 text-green-600 p-2 rounded-full">
                      <Download className="h-4 w-4" />
                    </div>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {event.title}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      {event.rating}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {event.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{event.date} • {event.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{event.attendees} attendees</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Key Topics:</h4>
                  <div className="flex flex-wrap gap-1">
                    {event.highlights.slice(0, 3).map((highlight, index) => (
                      <span 
                        key={index}
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded"
                      >
                        {highlight}
                      </span>
                    ))}
                    {event.highlights.length > 3 && (
                      <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1">
                        +{event.highlights.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-3">
                  {event.hasRecording && (
                    <button className="flex items-center space-x-1 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 text-sm font-medium">
                      <Play className="h-4 w-4" />
                      <span>Watch Recording</span>
                    </button>
                  )}
                  {event.hasMaterials && (
                    <button className="flex items-center space-x-1 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 text-sm font-medium">
                      <Download className="h-4 w-4" />
                      <span>Download Materials</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 dark:text-gray-500 mb-4">
              <Calendar className="h-16 w-16 mx-auto mb-4" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No events found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search terms or event type filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PastEvents;