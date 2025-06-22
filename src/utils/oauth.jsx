import { store } from "../app/store";
import { setUserFromCookie } from "../features/auth/authActions";
import { setInMemoryToken } from "./authToken";

const BASE_URL = import.meta.env.VITE_API_URL;

export const loginWithGoogle = () => {
  localStorage.setItem("rememberMe", "true");
  const popup = window.open(
    `${BASE_URL}/user/google?env=${import.meta.env.VITE_ENV}`,
    "_blank",
    "width=500,height=600"
  );

  if (!popup) {
    alert("Popup blocked! Please allow popups in your browser.");
    return;
  }

  // Fallback flow inside window message listener
  window.addEventListener("message", async function handler(event) {
    if (!event.data || event.data.type !== "OAUTH_SUCCESS") return;
    const token = event.data.token;

    // Close popup
    // popup.close();
    window.removeEventListener("message", handler);

    try {
      // First, try cookie-based request
      await store.dispatch(setUserFromCookie()).unwrap();
      window.location.href = "/dashboard";
    } catch (err) {
      console.warn("Cookie auth failed, falling back to token auth", err);

      // Fallback (no cookie) – store token in memory only
      if (token) {
        setInMemoryToken(token);

        try {
          await store.dispatch(setUserFromCookie()).unwrap();
        } catch (err) {
          console.warn("token auth failed as well, no fallback", err);
        }
        // Proceed as logged in (in memory only)
        window.location.href = "/dashboard";
      } else {
        window.location.href = "/auth-login";
      }
    }
  });
};

export const loginWithGitHub = () => {
  localStorage.setItem("rememberMe", "true");
  window.location.href = `${BASE_URL}/user/github`;
};
