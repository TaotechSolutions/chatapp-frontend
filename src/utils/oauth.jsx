const BASE_URL = import.meta.env.VITE_API_URL;

export const loginWithGoogle = () => {
  localStorage.setItem("rememberMe", "true");
  window.location.href = `${BASE_URL}/user/google`;
};

export const loginWithGitHub = () => {
  localStorage.setItem("rememberMe", "true");
  window.location.href = `${BASE_URL}/user/github`;
};
