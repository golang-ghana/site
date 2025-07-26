'use client';

import React, { useState } from 'react';
import { ArrowLeft, Calendar, User, Clock, Share2, Bookmark, Heart } from 'lucide-react';

const BlogPost = () => {
  const post = {
    title: 'Getting Started with Go: A Beginner\'s Guide to Golang in Ghana',
    content: `
      <p>Go, also known as Golang, has been gaining tremendous popularity among developers worldwide, and Ghana is no exception. This comprehensive guide will walk you through everything you need to know to get started with Go programming in the Ghanaian tech ecosystem.</p>
      
      <h2>Why Go is Perfect for Ghana's Tech Scene</h2>
      <p>Ghana's rapidly growing tech industry demands efficient, scalable solutions. Go's simplicity, performance, and excellent concurrency support make it an ideal choice for building modern applications that can handle the demands of our growing digital economy.</p>
      
      <h3>Key Benefits of Go:</h3>
      <ul>
        <li><strong>Fast Compilation:</strong> Go compiles quickly, allowing for rapid development cycles</li>
        <li><strong>Simple Syntax:</strong> Easy to learn and read, perfect for teams</li>
        <li><strong>Built-in Concurrency:</strong> Goroutines make concurrent programming straightforward</li>
        <li><strong>Strong Standard Library:</strong> Comprehensive tools for web development, networking, and more</li>
      </ul>
      
      <h2>Setting Up Your Go Development Environment</h2>
      <p>Getting started with Go in Ghana is straightforward. Here's what you need to do:</p>
      
      <h3>1. Install Go</h3>
      <p>Visit the official Go website and download the latest version for your operating system. The installation process is simple and well-documented.</p>
      
      <h3>2. Set Up Your Workspace</h3>
      <p>Go uses a specific workspace structure. Create a directory for your Go projects and set the GOPATH environment variable.</p>
      
      <h3>3. Choose Your Editor</h3>
      <p>Popular choices among Ghanaian developers include Visual Studio Code with the Go extension, GoLand, and Vim with Go plugins.</p>
      
      <h2>Your First Go Program</h2>
      <p>Let's create a simple "Hello, Ghana!" program to get you started:</p>
      
      <pre><code>package main

import "fmt"

func main() {
    fmt.Println("Hello, Ghana! Welcome to Go programming!")
}</code></pre>
      
      <h2>Go in Ghana's Fintech Sector</h2>
      <p>Many Ghanaian fintech companies are adopting Go for its performance and reliability. Companies like Zeepay and others are leveraging Go's strengths to build robust financial applications.</p>
      
      <h2>Learning Resources for Ghanaian Developers</h2>
      <p>Here are some excellent resources to continue your Go journey:</p>
      <ul>
        <li>The official Go documentation and tour</li>
        <li>Local meetups and workshops by Golang Ghana</li>
        <li>Online courses tailored for African developers</li>
        <li>Open source projects from the Ghanaian tech community</li>
      </ul>
      
      <h2>Join the Community</h2>
      <p>The Golang Ghana community is vibrant and welcoming. Join our Discord server, attend our monthly meetups, and connect with fellow Go enthusiasts across the country.</p>
      
      <p>Whether you're building the next big fintech solution or contributing to open source projects, Go provides the tools and performance you need to succeed in Ghana's dynamic tech landscape.</p>
    `,
    author: 'Kwame Asante',
    date: 'Dec 15, 2024',
    readTime: '8 min read',
    category: 'Tutorial',
    image: 'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=1200',
    likes: 42,
    bookmarks: 18
  };

  return (
    <div className="min-h-screen transition-colors duration-200" style={{ background: 'var(--color-background)' }}>
      {/* Header */}
      <div style={{ background: 'var(--color-card)', borderBottom: '1px solid var(--color-border)' }} className="sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button className="flex items-center transition-colors duration-200" style={{ color: 'var(--color-text-secondary)' }}>
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Blog
          </button>
        </div>
      </div>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Image */}
        <div className="mb-8">
          <img 
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-2xl"
          />
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Heart className="h-5 w-5" />
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors duration-200">
                <Bookmark className="h-5 w-5" />
                <span>{post.bookmarks}</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 hover:text-green-500 transition-colors duration-200">
                <Share2 className="h-5 w-5" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div 
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Author Bio */}
        <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
          <div className="flex items-start space-x-4">
            <img 
              src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100"
              alt={post.author}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{post.author}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                Software Engineer and Go enthusiast based in Accra. Passionate about building scalable 
                applications and sharing knowledge with the Ghanaian tech community.
              </p>
              <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
                Follow {post.author} →
              </button>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Related Posts</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={`https://images.pexels.com/photos/${i === 1 ? '1181467' : '3184291'}/pexels-photo-${i === 1 ? '1181467' : '3184291'}.jpeg?auto=compress&cs=tinysrgb&w=400`}
                  alt="Related post"
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {i === 1 ? 'Building Microservices with Go' : 'Go in Fintech: Ghana\'s Success Stories'}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {i === 1 ? 'Learn advanced patterns for building scalable microservices...' : 'How Ghanaian companies are leveraging Go for fintech...'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;