// imports React and ReactDom from react/react-dom libraries and APP from ./src/app.jsx
// renders App to the DOM

import React from 'react';
import { render } from 'react-dom';
import App from './app.jsx';

render(<App />, document.getElementById('root'));
