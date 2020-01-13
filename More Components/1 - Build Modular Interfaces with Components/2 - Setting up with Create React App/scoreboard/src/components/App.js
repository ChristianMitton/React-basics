//* importing React as a dependency from the installed npm packages
//* import React from 'react';

//? NOTE: You'll often see the react import statement written like this:
import React, { Component } from 'react';
//? This is called a 'named import', and with this named import statement, you can create a class without extending React.Component,
//? and only extending component

import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ]
  };

  handleScoreChange = (index, howToChangeScore) => {
      this.setState( prevState => ({
        score: prevState.players[index].score += howToChangeScore
      }));
      // console.log('index: ' + index, 'howToChangeScore: ' + howToChangeScore);
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          players={this.state.players} 
        />
  
        {/* Players list */}
        {/* When adding multiple params to arrow func, you need parens. 'index' is an optional parameter for map */}
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()} 
            index={index} // 'index' comes from the second argument passed into the map function
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}           
          />          
        )}
        <AddPlayerForm />
      </div>
    );
  }
}

//Exporting only the app component from this file. Because of this, App can be imported
//Anything that you don't export won't be avaiable to other modules/ files when imported
export default App;

/*
? Another way to export a class
export default class Counter extends Component {
  render() { ... }
}

? Another way to export a function
export const Counter = () => {
  return ( ... );
}

?Then import the function:
import { Counter } from './Counter';
*/