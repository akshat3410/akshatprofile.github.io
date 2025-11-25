import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Suspense } from 'react';

export default function Hero3D() {
  return (
    <div className="h-[500px] w-full cursor-grab active:cursor-grabbing">
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Sphere visible args={[1, 100, 200]} scale={2}>
            <MeshDistortMaterial
              color="#6366f1"
              attach="material"
              distort={0.5}
              speed={2}
              roughness={0}
            />
          </Sphere>
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}
