import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const root: string = window.location.hostname;

ReactDOM.render(
  <App host={root} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
