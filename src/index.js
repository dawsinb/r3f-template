/* global navigator window document */

import { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import styled from 'styled-components';
import './styles.css';

// register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(`/service-worker.js`);
  });
}

const Container = styled('div')`
  width: 100vw;
  height: 100vh;
`;

const LoadingContainer = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
`;

ReactDOM.render(
  <Container>
    <Suspense fallback={<LoadingContainer>loading...</LoadingContainer>}>
      <App />
    </Suspense>
  </Container>,

  document.getElementById('root')
);
