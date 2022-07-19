import React from "react";

import { Routes, Route } from "react-router-dom";

import ProtectedComponent from "./components/ProtectedComponent";
import NavBar from "./components/NavBar";
import HomePage from "./containers/HomePage";
import FooterPage from "./containers/FooterPage";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import DetailMovie from "./containers/DetailMovie";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route
          path="detail_movie/:idMovie"
          element={
            <ProtectedComponent>
              <DetailMovie />
            </ProtectedComponent>
          }
        />
        <Route
          path="*"
          element={
            <main>
              <h3>404 - Page not found !</h3>
            </main>
          }
        />
      </Routes>
      <FooterPage />
    </div>
  );
}

export default App;
