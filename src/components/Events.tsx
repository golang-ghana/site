import React from 'react';
import { Calendar, MapPin, Users, Clock, ExternalLink } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Go Workshop: Building REST APIs',
      date: 'Jan 15, 2025',
      time: '2:00 PM - 5:00 PM',
      location: 'Tech Hub Accra, Ghana',
      attendees: 45,
      maxAttendees: 60,
      type: 'Workshop',
      description: 'Learn to build robust REST APIs using Go, covering best practices, middleware, and database integration.',
      isOnline: false
    },
    {
      id: 2,
      title: 'Monthly Go Meetup - Concurrency Patterns',
      date: 'Jan 20, 2025',
      time: '6:00 PM - 8:00 PM',
      location: 'Virtual Event',
      attendees: 78,
      maxAttendees: 100,
      type: 'Meetup',
      description: 'Deep dive into Go\'s concurrency patterns with real-world examples and hands-on exercises.',
      isOnline: true
    },
    {
      id: 3,
      title: 'Go in Production: Scaling Web Applications',
      date: 'Feb 5, 2025',
      time: '10:00 AM - 4:00 PM',
      location: 'University of Ghana, Legon',
      attendees: 32,
      maxAttendees: 80,
      type: 'Conference',
      description: 'Full-day conference featuring talks from industry experts on scaling Go applications in production.',
      isOnline: false
    }
  ];

  const pastEvents = [
    {
      title: 'Go Fundamentals Bootcamp',
      date: 'Dec 10, 2024',
      attendees: 65,
      type: 'Bootcamp'
    },
    {
      title: 'Building Microservices with Go',
      date: 'Nov 25, 2024',
      attendees: 52,
      type: 'Workshop'
    },
    {
      title: 'Go Community Networking Event',
      date: 'Nov 15, 2024',
      attendees: 89,
      type: 'Networking'
    }
  ];

  return (
    <section id="events" className="py-20" style={{ background: 'var(--color-background)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for workshops, meetups, and conferences designed to enhance your Go programming skills 
            and connect with fellow developers.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {upcomingEvents.map((event) => (
            <div 
              key={event.id}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  event.type === 'Workshop' ? 'bg-blue-100 text-blue-600' :
                  event.type === 'Meetup' ? 'bg-green-100 text-green-600' :
                  'bg-purple-100 text-purple-600'
                }`}>
                  {event.type}
                </span>
                
                {event.isOnline && (
                  <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-xs font-medium">
                    Online
                  </span>
                )}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                {event.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {event.description}
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="h-4 w-4 mr-2" />
                  <span>{event.attendees} / {event.maxAttendees} attendees</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="w-full bg-gray-200 rounded-full h-2 mr-4">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                  ></div>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center whitespace-nowrap">
                  Register
                  <ExternalLink className="ml-1 h-3 w-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Past Events Summary */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Recent Past Events
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center">
                <h4 className="font-semibold text-gray-900 mb-2">{event.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{event.date}</p>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                  <Users className="h-4 w-4" />
                  <span>{event.attendees} attendees</span>
                </div>
                <span className="inline-block mt-2 bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                  {event.type}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="text-blue-600 hover:text-blue-700 font-semibold">
              View All Past Events →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;