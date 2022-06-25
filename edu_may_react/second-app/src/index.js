import React from 'react';
import ReactDOM from 'react-dom/client';
import Routing from "./components/Routing";
import { createRoot } from 'react-dom/client';



//ReactDOM.render(<Routing />, document.getElementById('root'));
// const container = document.getElementById('root');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<Routing/>);
const container = document.getElementById('root');
const root =ReactDOM.createRoot(container);
root.render(<Routing/>);