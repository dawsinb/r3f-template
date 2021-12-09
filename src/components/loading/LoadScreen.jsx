import styled from 'styled-components';

const Container = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
`;

function LoadScreen({ progress }) {
  return <Container>{progress}</Container>;
}

export { LoadScreen };
