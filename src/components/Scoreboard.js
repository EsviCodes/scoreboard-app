import React, { Component } from "react";
import Player from "./Player";

export default class Scoreboard extends Component {
  render() {
    return (
      <div className="scoreboard">
        <h1>Scoreboard</h1>
        <ul>
          <Player name="Bubbles" />
          <Player name="Blossom" />
          <Player name="Buttercup" />
        </ul>
      </div>
    );
  }
}
