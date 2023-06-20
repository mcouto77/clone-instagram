import { StatusBar } from "expo-status-bar";
import Routes from "./src/routes";
import Login from "./src/pages/login";
import { useState } from "react";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {!isLoggedIn ? <Login onLogin={handleLogin} /> : <Routes />}
      <StatusBar style="light" />
    </>
  );
}
