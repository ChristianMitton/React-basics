/*
Creation of a component - Reusable pieces of UI:

1.) Define the component as a function or class

2.) Display the component in the UI with a JSX tag

NOTE: try to make components as small as possible, that way it's easier to understand there behavior

*/

// This is a component. React components MUST begin with an uppercase letter.
// It differentiates custom components. Lowercase tags are built-in tags
function Header() {
  // returns react elements describing what should appear on the screen, using JSX
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className="stats">Players: 1</span>
    </header>
  );
}

/* 
  Alternate way of writing Header component using arrow notation:
  const Header = () => {
    return (
    <header>
      <h1>Scoreboard</h1>
      <span className="stats">Players: 1</span>
    </header>
  );
  }
*/

/*
  And if the component only returns JSX, you can use an implicit return:

  const Header = () => (
    <header>
      <h1>Scoreboard</h1>
      <span className="stats">Players: 1</span>
    </header>
  );  
*/

function Player(){
  return (
    <div className="player">
      <span className="player-name">
        Chris        
      </span>     
      {/* NOTE: This is how you use the counter component in the Player component. This is called composition. */}
      <Counter /> 
    </div>
  );
}

function Counter(){
  return (
    <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">35</span>
        <button className="counter-action increment"> + </button>
      </div>
  );
}


//Typically react applications have a component that composes all the main components together. This is that component:
function App(){
  return (
    <div className="scoreboard">
      <Header />
      {/* Players List */}
      <Player />
    </div>
  );
}

ReactDOM.render(
  // Note how the "Header" tag matches the name of the header function above
  // <Header></Header> would also work, and you'd use this if header had children tags  
  <App />,
  document.getElementById('root')
);


