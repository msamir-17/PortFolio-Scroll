import { Canvas } from '@react-three/fiber';
import React from 'react';
import "./stylee.css";
import { OrbitControls } from '@react-three/drei';

import Font from './Font';
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing';

const App = () => {
  return (
    <>
      <Canvas flat  camera={{fov:35}} >
        {/* <OrbitControls></OrbitControls> */}
        <ambientLight/>        
        <Font/>
        <EffectComposer>      
          <Bloom
            mipmapBlur
            intensity={12.0} // The bloom intensity.
            luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
          />
        </EffectComposer>
      </Canvas> 
    
      <div className="w-full py-32">
        <h1 className="text-black">Welcome to portfolio scroller</h1>
      </div>
    </> 
  );
};

export default App
