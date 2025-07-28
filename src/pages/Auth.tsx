'use client';

import React, { useState } from 'react';
import { User, Mail, Lock, Code2, Loader } from 'lucide-react';
import { toast } from 'sonner';
import { registerUser } from '../utils/apiClient';

interface AuthProps {
  onSuccess?: () => void;
}

const Auth = ({ onSuccess }: AuthProps) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    newsletter_option: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { email, first_name, last_name, newsletter_option } = formData;
      await registerUser({ email, first_name, last_name, newsletter_option });
      toast.success('Registration successful! Welcome to Golang Ghana.');
      setSubmitted(true);
      if (onSuccess) {
        onSuccess();
      }
    } catch (error: any) {
      toast.error(error?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div id="signup" className="flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-[var(--color-card)] rounded-2xl shadow-lg p-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Code2 className="h-10 w-10 text-[var(--color-primary)]" />
          </div>
          <h2 className="text-2xl font-bold mb-2 text-[var(--color-text-primary)]">Sign Up Successful!</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">Welcome to Golang Ghana. Check your email for confirmation and next steps.</p>
        </div>
      </div>
    );
  }

  return (
    <div id="signup" className="flex items-center justify-center">
      <div className="max-w-md w-full bg-[var(--color-card)] rounded-2xl shadow-lg p-8">
        <div className="flex items-center justify-center mb-6">
          <Code2 className="h-10 w-10 text-[var(--color-primary)]" />
        </div>
        <h2 className="text-3xl font-bold mb-2 text-[var(--color-text-primary)]">Create Your Account</h2>
        <p className="text-[var(--color-text-secondary)] mb-6">Join the Golang Ghana community and connect with Go developers across the country.</p>
        <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[var(--color-text-tertiary)]" />
                    <input
                      id="first_name"
                      name="first_name"
                      type="text"
                required
                      value={formData.first_name}
                      onChange={handleInputChange}
                className="pl-10 w-full px-3 py-3 border rounded-lg bg-[var(--color-background)] text-[var(--color-text-primary)] border-[var(--color-border)] placeholder-[var(--color-text-tertiary)] focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-colors duration-200"
                      placeholder="First name"
                    />
                  </div>
                  <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[var(--color-text-tertiary)]" />
                    <input
                      id="last_name"
                      name="last_name"
                      type="text"
                required
                      value={formData.last_name}
                      onChange={handleInputChange}
                className="pl-10 w-full px-3 py-3 border rounded-lg bg-[var(--color-background)] text-[var(--color-text-primary)] border-[var(--color-border)] placeholder-[var(--color-text-tertiary)] focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-colors duration-200"
                      placeholder="Last name"
                    />
                  </div>
                </div>
              <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[var(--color-text-tertiary)]" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
              className="pl-10 w-full px-3 py-3 border rounded-lg bg-[var(--color-background)] text-[var(--color-text-primary)] border-[var(--color-border)] placeholder-[var(--color-text-tertiary)] focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-colors duration-200"
                  placeholder="Email address"
                />
              </div>
              <div className="flex items-start space-x-3">
                <input
                  id="newsletter_option"  
                  name="newsletter_option"
                  type="checkbox"
                  checked={formData.newsletter_option}
                  onChange={handleInputChange}
                  className="mt-1 h-4 w-4 rounded border-[var(--color-border)] accent-[var(--color-primary)]"
                />
                <label htmlFor="newsletter_option" className="text-sm text-[var(--color-text-secondary)]">
                  Yes, I want to receive weekly updates, news, and event announcements from the Golang Ghana community.
                </label>
              </div>
            <button
              type="submit"
              className="w-full py-3 cursor-pointer text-white rounded-lg font-semibold bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition-colors duration-200 mt-2 flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <Loader className="animate-spin h-5 w-5 text-white" />
              ) : (
                'Register'
              )}
            </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;