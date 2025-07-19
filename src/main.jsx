import React from "react";
import ReactDOM from "react-dom/client";
import { injectSpeedInsights } from "@vercel/speed-insights";
// import App from './App.jsx'
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.jsx";
import PageTransition from "./components/PageTransition.jsx";
injectSpeedInsights();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <PageTransition>
      <RouterProvider router={router} />
      </PageTransition>
    
  </React.StrictMode>
);
