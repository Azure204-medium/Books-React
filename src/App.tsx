import React from "react";
import logo from "./logo.svg";
import "./index.css";
import { BookList } from "./Books";

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Books App</h1>
      </header>
      <BookList />
    </div>
  );
}

export default App;
