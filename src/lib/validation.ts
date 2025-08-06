// Validation utilities for forms
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhoneNumber = (phone: string): boolean => {
  // Simple US phone number validation
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/\D/g, ''));
};

export const validateCompanyDomain = (email: string): { isValid: boolean; suggestion?: string } => {
  const domain = email.split('@')[1];
  if (!domain) return { isValid: false };
  
  // Check for common personal email domains
  const personalDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com'];
  const isPersonalEmail = personalDomains.includes(domain.toLowerCase());
  
  return {
    isValid: true,
    suggestion: isPersonalEmail ? 'Consider using your company email for business inquiries' : undefined
  };
};

export const sanitizeInput = (input: string): string => {
  // Basic XSS prevention
  return input.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
              .replace(/javascript:/gi, '')
              .trim();
};

export const validateMessageLength = (message: string): { isValid: boolean; error?: string } => {
  const minLength = 10;
  const maxLength = 1000;
  
  if (message.length < minLength) {
    return { isValid: false, error: `Message must be at least ${minLength} characters` };
  }
  
  if (message.length > maxLength) {
    return { isValid: false, error: `Message must be less than ${maxLength} characters` };
  }
  
  return { isValid: true };
};