// 'Props' are immutable data, while 'State' is mutable data. State is the only data that changes over time

// Data from state is distributed through props. 
// state: gives data to ==> props: gives data to ==> component
// NOTE: STATE IS ONLY AVAILABLE TO COMPONENTS THAT ARE CLASSES, NOT FUNCTIONS

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

function Header(props) {
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
      {/* Because counter is a class component that maintains it's own state, you don't need the following prop passed to counter: */}
      {/* <Counter score={props.score} /> */}      
    </div>
  );
}

// class component
class Counter extends React.Component {

  // a state object is created in the constructor method
  constructor() {
    super() // must make the call to super() first    
    this.state = { // initializes the components state to a JS object. MUST be named 'state'
      // first, you need to set an initial state
      score: 0
    }; 
  }

  // another way to initialize state (simpler but not currently supported by all browsers):
  /*
    state = {
      score: 0
    };
  */

  // event handler
  // NOTE: any custom methods you create are not bound to the component by default. You need to bind them yourself. You do this in render
  /*
  incrementScore() {
    // the only way you can update state is by using react's built in setState function
    // pass in object that contains the set you want to update and the value you want to update it to
    this.setState(
      {
        score: this.state.score + 1
      }
    );
    // console.log("Hi, inside incrementScore");
  }
  */

  // event handler
  /* IMPORTANT NOTE: bounding a function automatically using arrow notation is the BEST way to write onclick functions */
  incrementScore = () => {
    this.setState({
      score: this.state.score + 1
    });
  }
  
  decrementScore = () => {
    this.setState({
      score: this.state.score - 1
    });

  }

  //Only method you need to define in class component:
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick= { this.decrementScore }> - </button>
        {/* classes access state with the 'this.state' keyword. The access props with 'this.props'. This referes to the components instance */}
        <span className="counter-score">{ this.state.score }</span>
        {/* NOTE: incrementScore is called without parentheseis. 
        Adding parenthesis would make the function activate as soon as the button is displayed. 
        Not adding them would enable activation only when the button is pressed*/}        
        <button className="counter-action increment" onClick={ this.incrementScore }> + </button>

        {/*
         Alternative way to bind event handlers, 'this' automatically binds the handler to the instance:
        <button className="counter-action increment" onClick={ () => this.incrementScore() }> + </button>
        */}
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
        <Player name={player.name} score={player.score} key={player.id.toString()} />
      )}
    </div>
  );
}

ReactDOM.render(
  <App initialPlayers={players} />,
  document.getElementById('root')
);