import React, { Component } from "react";

function Player(props) {
  // console.log(props)
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.score}</p>
      {/* 
                Use callback prop, 
                make sure the event handler 
                is a function definition 
            */}
      <button onClick={() => props.incrementScore(props.id)}>
        Saved a kitty
      </button>
    </div>
  );
}

class ScoreBoard extends Component {
  state = {
    players: [
      { id: 1, name: "Bubbles", score: 0 },
      { id: 2, name: "Blossom", score: 0 },
      { id: 3, name: "Buttercup", score: 0 }
    ]
  };

  incrementScore = playerId => {
    // console.log(playerId)
    // update the player score
    // 1st challenge: which player got clicked??? X
    // 2nd challenge how to update the scores in the array
    const updatedPlayers = this.state.players.map(player => {
      // console.log('playerId', playerId)
      // console.log('player', player)

      // If id matches, update the player
      if (player.id === playerId) {
        return {
          ...player,
          score: player.score + 1
        };
      }
      // otherwise, don't update
      return player;
    });

    // console.log('result?', updatedPlayers)
    this.setState({ players: updatedPlayers }); // -> calls render
  };

  render() {
    // console.log(this.state)
    return (
      <div>
        {/* { [<h1>Hello</h1>, <h2>Hello</h2>, 'World'] } */}
        {/* Hardcoding players :( */}
        {/* <Player 
                    name={this.state.players[0].name} 
                    score={this.state.players[0].score}
                />
                <Player 
                    name={this.state.players[1].name} 
                    score={this.state.players[1].score}
                />
                <Player 
                    name={this.state.players[2].name} 
                    score={this.state.players[2].score}
                /> */}
        {/* Rendering a collection using an array of objects */}
        {this.state.players
          .sort((player1, player2) => player2.score - player1.score)
          .map(player => {
            // console.log('console.log in map:', player)
            return (
              <Player
                key={player.id}
                id={player.id}
                name={player.name}
                score={player.score}
                incrementScore={this.incrementScore}
              />
            );
          })}
      </div>
    );
  }
}

export default ScoreBoard;
