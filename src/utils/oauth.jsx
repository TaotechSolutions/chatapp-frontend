const BASE_URL = "/api";

export const loginWithGoogle = () => {
  localStorage.setItem("rememberMe", "true");
  window.location.href = `${BASE_URL}/user/google?env=${import.meta.env.VITE_ENV}`;
};

export const loginWithGitHub = () => {
  localStorage.setItem("rememberMe", "true");
  window.location.href = `${BASE_URL}/user/github`;
};
