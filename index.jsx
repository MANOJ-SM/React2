
import React from 'react';
import ReactDOM from 'react-dom/client';

// ------------------------------------------------------------------------------------------------

/*
    cteating html structure using React 

    --> need to have empty div initailized with root in html first then React code in index.js file
         
    ---> root.render(..) -> will render (displays) the react code in web page 

     <div id="parent">
        <div id="child1">
            <h1>child1</h1>
            <h1>another Child</h1>
        </div>
        <div id="child2">
            <h1>child2</h1>
            <h1>another Child</h1>
        </div>
    </div>

*/

    
// # old way of react quite complex one 

// const parent = React.createElement("div",{id:"parent"},
//                 [ React.createElement("div",{id:"child1"},
//                     [ React.createElement("h1",{},"child1"),
//                       React.createElement("h1",{},"another child")] ),
//                   React.createElement("div",{id:"child2"},
//                     [ React.createElement("h1",{},"child2"),
//                       React.createElement("h1",{},"another child")])
//                 ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

//--------------------------------------------------------------------------------------------------------

// 1. using  normal react 

// const header1 = <h1 id="heading"> this is react</h1>
// const rootHeader = ReactDOM.createRoot(document.getElementById("root"));
// rootHeader.render(header1);

// 2. using jsx for single ele creation

// const jsxHeader = <h1>hi i am manoj </h1>
// const rootHeader = ReactDOM.createRoot(document.getElementById("root"));
// rootHeader.render(jsxHeader);

// 3. using jsx for multiple ele creation and use js in it 

// const fname = "manu u r fantastic!!"

// const jsxHeader = (

//     <>
//     <h1 id='heading' className='header'>manu lets not stop</h1>
//     <div>
//         <h2>this is what it is </h2>
//         {fname}
//     </div>
//     </>
// );

// const rootHeader = ReactDOM.createRoot(document.getElementById("root"));
// rootHeader.render(jsxHeader);

//1.react.Fragments or empty angle brackets for multiple ele 
//2. attributes should be in camle case 
//3.for js use { } curly braces 

// jsx = markup 

//1. react functional component -> javascript function which returns jsx(markup)
//2. class based component ->

//RFC ->

const Header = () => {                 // comp name should be cap 
    return (
        <>
            <h1>header component</h1>
            <h2>i am good </h2>
        </>
    )
};

const rootHeader = ReactDOM.createRoot(document.getElementById("root"));
 
rootHeader.render(<Header/>);  // inorder render component use   < />  with component and component should of capital in begning



// React ele -> assining jsx to a variable 
// react comp -> js fun retrning a jsx 


