import React, { useRef } from 'react'
import { useTexture } from '@react-three/drei';
import * as THREE from "three";
import { useFrame } from '@react-three/fiber';
const Font = () => {
    let tex = useTexture("./pro.PNG");
    let noah = useRef(null);
    useFrame((state , delta ) => {
        noah.current.rotation.y += delta;
    });

    return (
        <group rotation={[0,1.4,0.5]}>
            <mesh ref={noah}  >
            <cylinderGeometry args={[1, 1, 1, 60, 60, true]} ></cylinderGeometry>
            <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} ></meshStandardMaterial>
            </mesh>
        </group>
        
    )
}

export default Font