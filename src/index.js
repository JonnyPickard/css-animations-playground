import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const elements = ['block1', 'block2', 'cube'];

ReactDOM.render(<App elements={elements} />, document.getElementById('root'));
registerServiceWorker();
