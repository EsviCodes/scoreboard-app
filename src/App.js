import React from "react";
import "./App.css";
import Title from "./components/Title";
import Scoreboard from "./components/Scoreboard";

function App() {
  return (
    <div className="App">
      <Title content="The Powerpuff Girls" />
      <main>
        <Scoreboard />
      </main>
    </div>
  );
}

export default App;
