
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

ReactDOM.render(
  //Note how the "Header" tag matches the name of the header function above  
  <Header />,
  document.getElementById('root')
);


/*
Creation of a component - Reusable pieces of UI:

1.) Define the component as a function or class

2.) Display the component in the UI with a JSX tag

*/