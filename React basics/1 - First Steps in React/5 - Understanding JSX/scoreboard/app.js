// const title = <h1>My first React Element!</h1>; // bable converts this into a react element object
const desc = 'I just learned how to create a React node and render it into the DOM.';
const myTitleID = 'main-title';
const name = 'Chris';


//When you use { } like below, it's called a JSX expression. Anything withing them is javascript code.
//NOTE: Use 'className' to define the class attribute of the JSX tag. ('class' is reserved in JS)
const header = (
  <header>
    {/* Use JS like this to comment things in JSX*/}
    <h1 id={ myTitleID }>{ name }'s first react element!</h1> 
    <p className="main-desc">{ desc }</p>        
  </header>
);

ReactDOM.render(
  header,
  document.getElementById('root')
);