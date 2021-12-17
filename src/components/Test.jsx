import { useGLTF, useTexture } from '@react-three/drei';

function Test() {
  const texture1 = useTexture('/images/arcade.jpg');
  const texture2 = useTexture('/images/bridge.jpg');
  const texture3 = useTexture('/images/field.jpg');
  const texture4 = useTexture('/images/market.jpg');
  const texture5 = useTexture('/images/ocean.jpg');
  const texture6 = useTexture('/images/river.jpg');
  const texture7 = useTexture('/images/test/flower.jpg');
  const texture8 = useTexture('/images/test/test2/displacement3.jpg');

  const model1 = useGLTF('/models/phone.gltf');
  const model2 = useGLTF('/models/rock.gltf');

  //console.log(texture1, texture2, texture3, texture4, texture5, texture6)

  return (
    <mesh>
      <planeGeometry args={[100, 100, 100, 100]} />
      <meshBasicMaterial map={texture6} />
    </mesh>
  );
}

export default Test;
