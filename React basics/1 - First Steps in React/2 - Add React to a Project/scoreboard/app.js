/* 
    --------------------------------------------------------------------
                            React.createElement
    --------------------------------------------------------------------
    create elemet accepts 3 arguments that define the element you want to create

    --- Everything below is grouped under 'props'
    1. type/tag/element    
    2. Object (attributes, values, id's you can target with css)
        - if not giving any attributes, pass an empty {} or the value 'null'
    --- Everything after the second argument is considered to be part of 'children'
    3. Children/Contents between tag (could even be more tags)         
*/
const title = React.createElement(
    'h1',
    { id: 'main-title', title: 'This is a title.' },
    'My first React tag/element!'
);
/* 
    title would look like this: 

    <h1 id="main-title" title="This is a title">
        My first React tag/element!
    </h1>
*/

const desc = React.createElement(
    'p',
    {},
    'I just learned how to create a react node and render it into the DOM'
);

const header = React.createElement(
    'header',
    {},
    title, desc
);

/* 
    --------------------------------------------------------------------
                               React.createElement
    --------------------------------------------------------------------

Displaying 'title' to page/DOM. Accepts object that describes element (like title above) and html element you want to update
*/
ReactDOM.render(
    header,
    document.getElementById('root')
);
/* 
    NOTE: root can be named anything, as long as it matches what's in your html file (like a div in this case)
    So now, the react code we write will be rendered into the 'root' div. In react terms: 'this is where you'll 
    be mounting your application

    NOTE: Anything inbetween the tags will be replaced when render is first called. So for example, you could add the text
    'Loading...'
*/