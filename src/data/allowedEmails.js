// List of allowed email domains or specific emails that can register and login
// You can modify this list to restrict access

export const getAllowedEmails = () => {
  // Return list of allowed email domains or specific emails
  // Examples:
  // - ['@campus.edu', '@university.edu'] - allows any email from these domains
  // - ['student1@campus.edu', 'teacher1@campus.edu'] - allows specific emails
  // - ['@campus.edu', 'admin@university.edu'] - mix of domain and specific emails
  
  // IMPORTANT: Modify this list to restrict which emails can register and login
  // Currently allows emails from these domains:
  return [
    '@campus.edu',
    '@university.edu',
    '@college.edu',
    '@gmail.com',  // Allows all Gmail addresses
    // Add more allowed email domains or specific emails here
    // Example: 'admin@campus.edu',  // Specific email
    // Example: 'faculty@university.edu',  // Specific email
  ];
};

export const isEmailAllowed = (email) => {
  if (!email) return false;
  
  const allowedEmails = getAllowedEmails();
  const emailLower = email.toLowerCase().trim();
  
  // Check if email matches any allowed pattern
  for (const allowed of allowedEmails) {
    if (allowed.startsWith('@')) {
      // Domain check - email must end with this domain
      if (emailLower.endsWith(allowed.toLowerCase())) {
        return true;
      }
    } else {
      // Specific email check - exact match
      if (emailLower === allowed.toLowerCase()) {
        return true;
      }
    }
  }
  
  return false;
};

export const validateEmailFormat = (email) => {
  if (!email) return { valid: false, message: 'Email is required' };
  
  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(email)) {
    return { valid: false, message: 'Invalid email format. Please enter a valid email address.' };
  }
  
  // Check for common invalid patterns
  if (email.includes('..') || email.startsWith('.') || email.startsWith('@')) {
    return { valid: false, message: 'Invalid email format. Please enter a valid email address.' };
  }
  
  return { valid: true, message: '' };
};

