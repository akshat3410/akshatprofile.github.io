import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function OrganicModel() {
  const meshRef = useRef<THREE.Mesh>(null);

  useGSAP(() => {
    if (!meshRef.current) return;

    // Scroll rotation
    gsap.to(meshRef.current.rotation, {
      x: Math.PI * 2,
      y: Math.PI * 2,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      }
    });
  }, { dependencies: [] });

  useFrame((state) => {
    if (meshRef.current) {
      // Idle animation
      meshRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
      
      // Mouse interaction (parallax)
      const { x, y } = state.mouse;
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, x * 0.2, 0.1);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, y * 0.2, 0.1);
    }
  });

  return (
    <Icosahedron ref={meshRef} args={[1, 24]} scale={2.5}>
      <MeshTransmissionMaterial
        backside
        samples={2}
        resolution={512}
        thickness={0.5}
        roughness={0.1}
        chromaticAberration={0.03}
        anisotropy={0.1}
        distortion={0.4}
        distortionScale={0.4}
        temporalDistortion={0.1}
        iridescence={0.5}
        iridescenceIOR={1}
        iridescenceThicknessRange={[0, 1400]}
        color="#B6F500"
        background={new THREE.Color("#FFFADC")}
      />
    </Icosahedron>
  );
}
