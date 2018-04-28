import React from 'react';
import ReactDOM from 'react-dom';
import App from "./src/App";
import { Router } from 'react-router-dom';
import createBrowserHistory from "history/createBrowserHistory";
export const history = createBrowserHistory();

ReactDOM.render(<Router history={history}><App /></Router>,
document.getElementById('root'));