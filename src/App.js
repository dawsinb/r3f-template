import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import { LoadScreen } from 'Components/loading/LoadScreen';

const AppContainer = styled('div')`
  width: 100vw;
  height: 100vh;
`;

const CanvasContainer = styled('div')`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <AppContainer>
      <LoadScreen progress={100} />
      <Suspense fallback={<LoadScreen progress={100} />}>
        <CanvasContainer>
          <Canvas dpr={[2, 2]} camera={{ position: [0, 0, 100], far: 200 }} />
        </CanvasContainer>
      </Suspense>
    </AppContainer>
  );
}

export { App };
