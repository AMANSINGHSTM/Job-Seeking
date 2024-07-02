import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const initialContext = {
  isAuthorized: false,
  user: {},
  url: "http://localhost:4000",
};

export const Context = createContext(initialContext);

const AppWrapper = () => {
  const [isAuthorized, setIsAuthorized] = useState(initialContext.isAuthorized);
  const [user, setUser] = useState(initialContext.user);
  const { url } = initialContext;

  return (
    <Context.Provider
      value={{ isAuthorized, setIsAuthorized, user, setUser, url }}
    >
      <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
