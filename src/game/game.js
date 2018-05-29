import React, { Component } from 'react';
import logo from './../logo.svg';
import './Game.css';
const Stars = (props) => {

    const numberOfStars = 1 + Math.floor(Math.random() * 9);

    let stars = [];
    stars = numberOfStars.map((num) => {
        return <i key={num} className="fa fa-star"></i>;
    });

    return (
        <div className="col-5">
            {stars}
        </div>
    );
}

const Button = (props) => {
    return (
        <div className="col-2">
            <button>=</button>
        </div>
    );
}


const Answer = (props) => {
    return (
        <div className="col-5">
            ...
        </div>
    );
}

const Numbers = (props) => {
    return (
        <div className="card text-center width-100 mt-4">
            <div>
                <span>1</span>
                <span className="selected">2</span>
                <span className="used">3</span>
            </div>
        </div>
    );
}

class GameContainer extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to The game</h1>
        </header>
        <div className="container">
            <h3> Play nine</h3>
            <hr />
            <div className="row">
            <Stars />
            <Button />
            <Answer />
            <br />

            <Numbers />
            </div>
        </div>
      </div>
    );
  }
}

export default GameContainer;
