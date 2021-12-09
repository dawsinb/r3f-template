import ReactDOM from 'react-dom';
import { App } from './App';
import './styles.css';

// register service worker
if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  console.log('test');
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(`/service-worker.js`);
  });
}

// render the app
ReactDOM.render(<App />, document.getElementById('root'));
