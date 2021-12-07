import React from 'react';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';

const Container = styled('div')`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <Container>
      <Canvas dpr={[2, 2]} camera={{ position: [0, 0, 100], far: 200 }}></Canvas>
    </Container>
  );
}

export { App };
