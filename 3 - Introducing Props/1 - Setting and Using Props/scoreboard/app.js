/* --------- Props

Props are the same as attributes for an HTML tag.

Properties/props are used to customize components, and pass dynamic info into them

2 main steps to use props:

  1.) Define the props in a component's JSX tag
  2.) Enable the component to use the props

You pass props to a component at the place where the compoent is used

*/
// Components get 1 default argument that store props given to the component. This can be named anything, here it's called 'props'
const Header = (props) => {
  return (
    <header>
      <h1>{ props.title }</h1>
      <span className="stats">Players: { props.totalPlayers }</span>
      {/*<span className="stats">Players: { props.arrowFuncEx(5) }</span>*/}
    </header>
  );
}

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        {props.name}
      </span>
      {/* Passing in props from Player into Counter */}
      <Counter name={props.name} score={props.score}/>
    </div>
  );
}

const Counter = (props) => {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">{props.score}</span>
      <button className="counter-action increment"> + </button>
    </div>
  );
}

const App = () => {
  return (
    <div className="scoreboard">
      {/* Ex of giving Header props. Props can be named anything, and can be assigned to arrow functions: */}
      <Header title="Scoreboard" totalPlayers={1} arrowFuncEx={ n => n + 1}/>

      {/* Players list */}
      <Player name="Chris" score={1}/>
      <Player name="Mark" score={1}/>
      <Player name="Rachael" score={1}/>
      <Player name="Suzie" score={1}/>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);