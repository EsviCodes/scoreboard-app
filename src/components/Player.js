import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Player.css";

export default class Player extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  };

  handleClick = () => {
    this.props.incrementScore(this.props.id);
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.addPlayer(this.state.name);
  };

  render() {
    return (
      <li className="player">
        <p className="name">{this.props.name}</p>
        <p className="score">{this.props.score}</p>
        <button onClick={this.handleClick}>Saved Kitty</button>
      </li>
    );
  }
}
