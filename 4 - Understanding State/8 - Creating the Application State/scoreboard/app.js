/**
 * ? types to state to consider:
 * 
 *  1.) Application state
 *    - Data avaiable to the entire application
 * 
 *  2.) Component State 
 *    - Data available to instances of components
 * 
 */

/**
   types to state to consider:
1.) Application state
    - Data available to the entire application

  2.) Component state
  

 
 */

const Header = (props) => {
  return (
    <header>
      <h1>{ props.title }</h1>
      <span className="stats">Players: { props.totalPlayers }</span>
    </header>
  );
}

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
      {/* Note how an annonymous is called in order to use function passed through prop*/}
      <button className="remove-player" onClick={ () => props.removePlayer(props.id) }>✖</button>
        { props.name }
      </span>

      <Counter />
    </div>
  );
}

class Counter extends React.Component {
  state = {
    score: 0
  };

  incrementScore = () => {
    this.setState( prevState => ({
      score: prevState.score + 1
    }));
  }

  decrementScore = () => {
    this.setState( prevState => ({
      score: prevState.score - 1
    }));
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
        <span className="counter-score">{ this.state.score }</span>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    );
  }
}

class App extends React.Component {

  state = {
    players: [
      {
        name: "Guil",        
        id: 1
      },
      {
        name: "Treasure",
        id: 2
      },
      {
        name: "Ashley",
        id: 3
      },
      {
        name: "James",
        id: 4
      }
    ]
  };

  /**
   * ! NOTE: You can pass functions as props, which is how 'handleRemovePlayer' will be passed to the player component
   */
  handleRemovePlayer = (id) => {

    // We aren't modifying state directly here, you shouldn't do that. You have to a create a new array that no longer contains
    // the player you want to remove. A common way to do this is the filter method. It removes elements from an array without
    // changing the original array 
    this.setState( prevState => ({
      // filter takes a callback function. The 1st parameter represents the current item when iterating. 'p' stands for player
      // The call back function is saying "Return all players except the player with this specific id"
      players: prevState.players.filter( p => p.id !== id )
    }));
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" totalPlayers={this.state.players.length} />
  
        {/* Players list */}
        {this.state.players.map( player =>
          // ! Note how the handleRemovePlayer function is being passed down
          <Player name={player.name} id={player.id} key={player.id.toString()} removePlayer={this.handleRemovePlayer} />
        )}
      </div>
    );
  }  
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);