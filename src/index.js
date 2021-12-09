/* global navigator window document */

import ReactDOM from 'react-dom';
import { App } from './App';
import './styles.css';

// register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(`/service-worker.js`);
  });
}

// render the app
ReactDOM.render(<App />, document.getElementById('root'));
