import { store } from "../app/store";
import { setUserFromCookie } from "../features/auth/authActions";
import { setInMemoryToken } from "./authToken";

const BASE_URL = import.meta.env.VITE_API_URL;

const loginWithOAuthProvider = (url) => {
  localStorage.setItem("rememberMe", "true");

  const popup = window.open(url, "_blank", "width=500,height=600");

  if (!popup) {
    alert("Popup blocked! Please allow popups in your browser.");
    return;
  }

  const handleMessage = async (event) => {
    if (!event.data || event.data.type !== "OAUTH_SUCCESS") return;

    const token = event.data.token;
    window.removeEventListener("message", handleMessage);

    try {
      // First try cookie-based login
      await store.dispatch(setUserFromCookie()).unwrap();
      window.location.href = "/dashboard";
    } catch (err) {
      console.warn("Cookie auth failed, falling back to token auth", err);

      if (token) {
        setInMemoryToken(token);

        try {
          await store.dispatch(setUserFromCookie()).unwrap();
        } catch (err) {
          console.warn("Token auth failed as well", err);
        }

        window.location.href = "/dashboard";
      } else {
        window.location.href = "/auth-login";
      }
    }
  };

  window.addEventListener("message", handleMessage);
};

export const loginWithGoogle = () => {
  loginWithOAuthProvider(`${BASE_URL}/user/google?env=${import.meta.env.VITE_ENV}`);
};

export const loginWithGitHub = () => {
  loginWithOAuthProvider(`${BASE_URL}/user/github`);
};