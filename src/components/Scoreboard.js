import React, { Component } from "react";
import Player from "./Player";
import "./Scoreboard.css";
import AddPlayer from "./AddPlayer";

export default class Scoreboard extends Component {
  state = {
    players: [
      { id: 1, name: "Bubbles", score: 0 },
      { id: 2, name: "Blossom", score: 0 },
      { id: 3, name: "Buttercup", score: 0 }
    ]
  };

  render() {
    // copying the array of players because `.sort()` **mutates!**
    const players_copy = [...this.state.players];
    // sorting the players
    players_copy.sort((a, b) => b.score - a.score);
    // console.log(players_copy); // <!-- add console.log's if you're not sure!

    return (
      <div className="scoreboard">
        <h1>Scoreboard</h1>
        <ul>{players_copy.map(this.renderPlayer)}</ul>
        <AddPlayer addPlayer={this.addPlayer} />
      </div>
    );
  }

  renderPlayer = player => {
    return (
      <Player
        id={player.id}
        name={player.name}
        score={player.score}
        key={player.id}
        incrementScore={this.incrementScoreOfPlayer}
      />
    );
  };

  incrementScoreOfPlayer = id => {
    // Making a new array with the same objects except for the
    //  one that should be updated,
    const updatedPlayers = this.state.players.map(player => {
      if (player.id === id) {
        // ...which we replace with a copy of the original,
        //  except for the property `score` which is incremented
        return { ...player, score: player.score + 1 };
      } else {
        return player;
      }
    });
    // Finally, we use `this.setState` to replace the players array
    this.setState({ players: updatedPlayers });
  };

  addPlayer = name => {
    const player = {
      id: Math.round(Math.random() * 100000),
      name,
      score: 0
    };
    this.setState({
      players: this.state.players.concat(player)
    });
  };
}
