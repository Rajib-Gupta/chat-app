// App.js
import React from "react";
import { UIKitProvider } from "agora-chat-uikit";
import "agora-chat-uikit/style.css";
import AppRoutes from "./AppRoutes";
import { BrowserRouter } from "react-router-dom";

const appKey = "611145565#1331280"; // your appKey
const App = () => {
  return (
    <UIKitProvider
      initConfig={{
        appKey,
      }}
    >
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </UIKitProvider>
  );
};

export default App;
