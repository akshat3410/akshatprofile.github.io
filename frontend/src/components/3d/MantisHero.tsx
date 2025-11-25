import { Canvas } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import OrganicModel from './OrganicModel';

export default function MantisHero() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <color attach="background" args={['#FFFADC']} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <OrganicModel />
      </Float>
      
      <Environment preset="studio" />
    </Canvas>
  );
}
