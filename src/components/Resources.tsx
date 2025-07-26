import React from 'react';
import { Book, Video, FileText, Download, ExternalLink, Star } from 'lucide-react';

const Resources = () => {
  const resourceCategories = [
    {
      icon: Book,
      title: 'Learning Materials',
      description: 'Comprehensive guides and tutorials for mastering Go',
      color: 'blue',
      resources: [
        { name: 'Go by Example', type: 'Tutorial', rating: 5, link: '#' },
        { name: 'Effective Go Guide', type: 'Documentation', rating: 5, link: '#' },
        { name: 'Go Programming Patterns', type: 'eBook', rating: 4, link: '#' }
      ]
    },
    {
      icon: Video,
      title: 'Video Content',
      description: 'Watch and learn from our recorded sessions and tutorials',
      color: 'green',
      resources: [
        { name: 'Go Concurrency Workshop', type: 'Video', rating: 5, link: '#' },
        { name: 'Building REST APIs', type: 'Tutorial Series', rating: 4, link: '#' },
        { name: 'Go Best Practices', type: 'Webinar', rating: 5, link: '#' }
      ]
    },
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Official docs, cheat sheets, and quick references',
      color: 'purple',
      resources: [
        { name: 'Go Language Specification', type: 'Documentation', rating: 5, link: '#' },
        { name: 'Standard Library Reference', type: 'Reference', rating: 5, link: '#' },
        { name: 'Go Cheat Sheet', type: 'Quick Reference', rating: 4, link: '#' }
      ]
    },
    {
      icon: Download,
      title: 'Tools & Templates',
      description: 'Starter projects, tools, and code templates',
      color: 'orange',
      resources: [
        { name: 'Go Project Template', type: 'Template', rating: 4, link: '#' },
        { name: 'Docker Go Setup', type: 'Configuration', rating: 5, link: '#' },
        { name: 'Testing Framework', type: 'Tool', rating: 4, link: '#' }
      ]
    }
  ];

  const featuredResources = [
    {
      title: 'The Complete Go Programming Course',
      description: 'From beginner to advanced, this comprehensive course covers everything you need to master Go programming.',
      type: 'Course',
      duration: '12 hours',
      level: 'All Levels',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 5,
      students: 1250
    },
    {
      title: 'Go Microservices Architecture Guide',
      description: 'Learn how to design and implement scalable microservices using Go with real-world examples.',
      type: 'eBook',
      duration: '150 pages',
      level: 'Intermediate',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 5,
      students: 890
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600 group-hover:bg-blue-200',
      green: 'bg-green-100 text-green-600 group-hover:bg-green-200',
      purple: 'bg-purple-100 text-purple-600 group-hover:bg-purple-200',
      orange: 'bg-orange-100 text-orange-600 group-hover:bg-orange-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="resources" className="py-20" style={{ background: 'var(--color-background-secondary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
            Learning Resources
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
            Everything you need to master Go programming, from beginner tutorials 
            to advanced architectural patterns and best practices.
          </p>
        </div>

        {/* Featured Resources */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredResources.map((resource, index) => (
            <div
              key={index}
              className="rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              style={{ background: 'var(--color-card)' }}
            >
              <div className="relative">
                <img 
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span style={{ background: 'rgba(255,255,255,0.9)', color: 'var(--color-text-secondary)', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 500 }}>
                    {resource.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div style={{ background: 'rgba(255,255,255,0.9)', borderRadius: '9999px', padding: '0.25rem 0.5rem', display: 'flex', alignItems: 'center' }}>
                    <Star className="h-4 w-4" style={{ color: 'var(--color-warning)' }} />
                    <span className="text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>{resource.rating}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>{resource.title}</h3>
                <p className="mb-4 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{resource.description}</p>
                <div className="flex items-center justify-between text-sm mb-4" style={{ color: 'var(--color-text-tertiary)' }}>
                  <span>{resource.duration}</span>
                  <span>{resource.level}</span>
                  <span>{resource.students} students</span>
                </div>
                <button
                  className="w-full py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
                  style={{ background: 'var(--color-primary)', color: 'var(--color-card)' }}
                >
                  Access Resource
                  <ExternalLink className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Resource Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resourceCategories.map((category, index) => (
            <div
              key={index}
              className="rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group"
              style={{ background: 'var(--color-card)' }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300"
                style={{ background: 'var(--color-primary-light)', color: 'var(--color-primary)' }}
              >
                <category.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>{category.title}</h3>
              <p className="text-sm mb-6 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{category.description}</p>
              <div className="space-y-3">
                {category.resources.map((resource, resourceIndex) => (
                  <div
                    key={resourceIndex}
                    className="flex items-center justify-between p-2 rounded-lg transition-colors duration-200"
                    style={{ background: 'var(--color-background-tertiary)' }}
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>{resource.name}</span>
                        <div className="flex items-center">
                          {[...Array(resource.rating)].map((_, i) => (
                            <Star key={i} className="h-3 w-3" style={{ color: 'var(--color-warning)' }} />
                          ))}
                        </div>
                      </div>
                      <span className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>{resource.type}</span>
                    </div>
                    <ExternalLink className="h-4 w-4" style={{ color: 'var(--color-primary)' }} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className="mt-16 text-center rounded-2xl p-8"
          style={{ background: 'linear-gradient(90deg, var(--color-primary), var(--color-primary-hover))', color: 'var(--color-card)' }}
        >
          <h3 className="text-2xl font-bold mb-4 text-white">
            Can't Find What You're Looking For?
          </h3>
          <p className="mb-6 max-w-2xl mx-auto text-white">
            Our community is always creating new resources. Suggest a topic or contribute 
            your own content to help fellow Go developers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              style={{ background: 'var(--color-card)', color: 'var(--color-primary)' }}
            >
              Suggest a Resource
            </button>
            <button
              className="border-2 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              style={{ borderColor: 'var(--color-card)', color: 'var(--color-card)', background: 'transparent' }}
            >
              Contribute Content
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;