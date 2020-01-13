const players = [
  {
    name: "Chris",
    score: 50,
    id: 1
  },
  {
    name: "Treasure",
    score: 85,
    id: 2
  },
  {
    name: "Ashley",
    score: 95,
    id: 3
  },
  {
    name: "James",
    score: 80,
    id: 4
  }
];

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
    // Updateing state based on previous state in a more reliable way via a call back function
    /*
      1st argument.) give previous state
      2nd argument.) OPTIONAL; props at the time the update is applied
    */
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

const App = (props) => {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={props.initialPlayers.length} />

      {/* Players list */}
      {props.initialPlayers.map( player =>
        <Player name={player.name} key={player.id.toString()} />
      )}
    </div>
  );
}

ReactDOM.render(
  <App initialPlayers={players} />,
  document.getElementById('root')
);