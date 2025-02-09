import React from 'react';
import ReactDOM from 'react-dom/client';

const header1 = <h1 id="heading"> this is react</h1>
const rootHeader = ReactDOM.createRoot(document.getElementById("root"));
rootHeader.render(header1);
