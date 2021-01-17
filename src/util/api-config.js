let backendHost;

const hostname = window && window.location && window.location.hostname;

if (hostname === "localhost") {
  backendHost = "http://localhost:5000";
} else {
  backendHost = process.env.REACT_APP_BACKEND_URL;
}

export const API_ROOT = backendHost;
