'use client';

import React, { useState } from 'react';
import { User, Mail, Lock, Code2 } from 'lucide-react';

const Auth = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
  return (
      <div id="signup" className="min-h-screen flex items-center justify-center bg-[var(--color-background)]">
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
    <div id="signup" className="min-h-screen flex items-center justify-center bg-[var(--color-background)]">
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
                      id="firstName"
                      name="firstName"
                      type="text"
                required
                      value={formData.firstName}
                      onChange={handleInputChange}
                className="pl-10 w-full px-3 py-3 border rounded-lg bg-[var(--color-card)] text-[var(--color-text-primary)] border-[var(--color-border)] placeholder-[var(--color-text-tertiary)] focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                      placeholder="First name"
                    />
                  </div>
                  <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[var(--color-text-tertiary)]" />
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                required
                      value={formData.lastName}
                      onChange={handleInputChange}
                className="pl-10 w-full px-3 py-3 border rounded-lg bg-[var(--color-card)] text-[var(--color-text-primary)] border-[var(--color-border)] placeholder-[var(--color-text-tertiary)] focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
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
              className="pl-10 w-full px-3 py-3 border rounded-lg bg-[var(--color-card)] text-[var(--color-text-primary)] border-[var(--color-border)] placeholder-[var(--color-text-tertiary)] focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                  placeholder="Email address"
                />
              </div>
              <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[var(--color-text-tertiary)]" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={handleInputChange}
              className="pl-10 pr-10 w-full px-3 py-3 border rounded-lg bg-[var(--color-card)] text-[var(--color-text-primary)] border-[var(--color-border)] placeholder-[var(--color-text-tertiary)] focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[var(--color-text-tertiary)]"
              tabIndex={-1}
                >
              {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
                <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[var(--color-text-tertiary)]" />
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
              required
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
              className="pl-10 w-full px-3 py-3 border rounded-lg bg-[var(--color-card)] text-[var(--color-text-primary)] border-[var(--color-border)] placeholder-[var(--color-text-tertiary)] focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                    placeholder="Confirm password"
                  />
          </div>
            <div className="flex items-start space-x-3">
              <input
                id="agreeToTerms"
                name="agreeToTerms"
                type="checkbox"
              required
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
              className="mt-1 h-4 w-4 rounded border-[var(--color-border)] accent-[var(--color-primary)]"
              />
            <label htmlFor="agreeToTerms" className="text-sm text-[var(--color-text-secondary)]">
                I agree to the{' '}
              <a href="#" className="text-[var(--color-primary)] underline">Terms and Conditions</a>{' '}
                and{' '}
              <a href="#" className="text-[var(--color-primary)] underline">Privacy Policy</a>
                </label>
              </div>
            <button
              type="submit"
            className="w-full py-3 rounded-lg font-semibold bg-[var(--color-primary)] text-[var(--color-card)] hover:bg-[var(--color-primary-hover)] transition-colors duration-200 mt-2"
          >
            Create Account
            </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;