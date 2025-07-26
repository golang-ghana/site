// Theme configuration - Easy to customize colors
export const theme = {
  light: {
    // Primary colors
    primary: '#2563eb', // blue-600
    primaryHover: '#1d4ed8', // blue-700
    primaryLight: '#dbeafe', // blue-100
    
    // Background colors
    background: '#ffffff',
    backgroundSecondary: '#f9fafb', // gray-50
    backgroundTertiary: '#f3f4f6', // gray-100
    
    // Text colors
    textPrimary: '#111827', // gray-900
    textSecondary: '#6b7280', // gray-500
    textTertiary: '#9ca3af', // gray-400
    
    // Border colors
    border: '#e5e7eb', // gray-200
    borderHover: '#d1d5db', // gray-300
    
    // Card colors
    card: '#ffffff',
    cardHover: '#ffffff',
    
    // Success, warning, error
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
  },
  dark: {
    // Primary colors (keeping blue for consistency)
    primary: '#3b82f6', // blue-500
    primaryHover: '#2563eb', // blue-600
    primaryLight: '#1e3a8a', // blue-900
    
    // Background colors using your specified dark color
    background: '#414141',
    backgroundSecondary: '#363636',
    backgroundTertiary: '#2b2b2b',
    
    // Text colors
    textPrimary: '#f9fafb', // gray-50
    textSecondary: '#d1d5db', // gray-300
    textTertiary: '#9ca3af', // gray-400
    
    // Border colors
    border: '#4b5563', // gray-600
    borderHover: '#6b7280', // gray-500
    
    // Card colors
    card: '#4b4b4b',
    cardHover: '#525252',
    
    // Success, warning, error
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
  }
};

// CSS custom properties for easy theming
export const getCSSVariables = (isDark: boolean) => {
  const colors = isDark ? theme.dark : theme.light;
  
  return {
    '--color-primary': colors.primary,
    '--color-primary-hover': colors.primaryHover,
    '--color-primary-light': colors.primaryLight,
    '--color-background': colors.background,
    '--color-background-secondary': colors.backgroundSecondary,
    '--color-background-tertiary': colors.backgroundTertiary,
    '--color-text-primary': colors.textPrimary,
    '--color-text-secondary': colors.textSecondary,
    '--color-text-tertiary': colors.textTertiary,
    '--color-border': colors.border,
    '--color-border-hover': colors.borderHover,
    '--color-card': colors.card,
    '--color-card-hover': colors.cardHover,
    '--color-success': colors.success,
    '--color-warning': colors.warning,
    '--color-error': colors.error,
  };
};