/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import {Suspense, useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = ({ isMobile, onLoad }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  useEffect(() => {
    if (onLoad) onLoad(); // Notify parent once model is loaded
  }, [computer, onLoad]);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} />
      <pointLight intensity={5} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};


const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }, []);

  return (
    <>
      {!modelLoaded && isMobile && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black z-10">
          <p className="text-white text-lg">3D model not supported. Showing fallback.</p>
        </div>
      )}
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
          <Computers
            isMobile={isMobile}
            onLoad={() => {
              console.log("✅ 3D Model loaded successfully.");
              setModelLoaded(true);
            }}
          />
        </Suspense>
        <Preload all />
      </Canvas>
    </>
  );
};


export default ComputersCanvas