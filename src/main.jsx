import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/home/index.jsx";
import { Provider } from "react-redux";
import ReactDOM from 'react-dom/client';
import store from './pages/home/store.js';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </StrictMode>
);
