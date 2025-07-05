let fallbackToken = null;
let authMode = localStorage.getItem('auth_mode') || 'cookie';

export const setInMemoryToken = token => {
  fallbackToken = token;
  sessionStorage.setItem('fallback_token', token);
};

export const getInMemoryToken = () => {
  return fallbackToken || sessionStorage.getItem('fallback_token');
};

export const clearInMemoryToken = () => {
  fallbackToken = null;
  localStorage.removeItem('auth_mode');
  sessionStorage.removeItem('fallback_token');
};

export const getAuthMode = () => authMode;
export const setAuthMode = mode => {
  authMode = mode;
  localStorage.setItem('auth_mode', mode);
};
