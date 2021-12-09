import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import { LoadScreen } from 'Components/loading/LoadScreen';

const Container = styled('div')`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <Container>
      <Suspense fallback={<LoadScreen />}>
        <Canvas dpr={[2, 2]} camera={{ position: [0, 0, 100], far: 200 }}></Canvas>
      </Suspense>
    </Container>
  );
}

export { App };
