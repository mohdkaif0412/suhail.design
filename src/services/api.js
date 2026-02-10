/**
 * API Configuration utility
 * Handles API endpoints for Next.js
 */

const API_CONFIG = {
  development: {
    baseUrl: 'http://localhost:3000',
    contact: '/api/contact',
    health: '/api/health',
  },
  production: {
    baseUrl: '',
    contact: '/api/contact',
    health: '/api/health',
  },
};

/**
 * Get the current environment
 */
export const getEnvironment = () => {
  return process.env.NODE_ENV === 'production' ? 'production' : 'development';
};

/**
 * Get API configuration for current environment
 */
export const getApiConfig = () => {
  const env = getEnvironment();
  return API_CONFIG[env];
};

/**
 * Get contact API endpoint
 */
export const getContactEndpoint = () => {
  return getApiConfig().contact;
};

/**
 * Get health check endpoint
 */
export const getHealthEndpoint = () => {
  return getApiConfig().health;
};

/**
 * Submit contact form
 * @param {Object} formData - Contact form data
 * @returns {Promise<Object>} - API response
 */
export const submitContactForm = async (formData) => {
  const endpoint = getContactEndpoint();
  console.log('Submitting to endpoint:', endpoint);
  console.log('Form data:', formData);

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    return {
      success: response.ok && data.success,
      message: data.message,
      details: data.details,
      status: response.status,
    };
  } catch (error) {
    console.error('Contact form submission error:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Could not connect to the server. Please try again.';
    
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      errorMessage = 'Server is not running. Please ensure the API server is started.';
    } else if (error.code === 'ECONNREFUSED') {
      errorMessage = 'Connection refused. Please check if the API server is running on port 3002.';
    }
    
    return {
      success: false,
      message: errorMessage,
      error: error.message,
      status: 0,
    };
  }
};

/**
 * Check API health
 * @returns {Promise<Object>} - Health check response
 */
export const checkApiHealth = async () => {
  const endpoint = getHealthEndpoint();

  try {
    const response = await fetch(endpoint);
    const data = await response.json();

    return {
      healthy: response.ok,
      data,
      status: response.status,
    };
  } catch (error) {
    return {
      healthy: false,
      error: error.message,
      status: 0,
    };
  }
};

export default {
  getEnvironment,
  getApiConfig,
  getContactEndpoint,
  getHealthEndpoint,
  submitContactForm,
  checkApiHealth,
};
