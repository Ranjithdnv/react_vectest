import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.jsx";
import store from "./store/store.js"; // Import the store
import { BrowserRouter, HashRouter } from "react-router-dom";
import { CountProvider } from "./context";
{
  /* The following line can be included in your src/index.js or App.js file */
}
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <CountProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </CountProvider>
    </StrictMode>
  </BrowserRouter>
);
