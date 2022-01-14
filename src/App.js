import "./App.css";
import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";

function App() {
  return (
    <div className="container">
      <Header />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
