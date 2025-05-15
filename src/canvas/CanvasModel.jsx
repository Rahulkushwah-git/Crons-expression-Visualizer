import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';
import Shirt from './Shirt';
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';

const CanvasModel = () => (
  <Canvas camera={{ position: [0, 0, 2.5], fov: 25 }} shadows>
    <ambientLight intensity={0.5} />
    <Environment preset="city" background />
    <CameraRig>
      <Backdrop />
      <Center>
        <Shirt />
      </Center>
    </CameraRig>
  </Canvas>
);

export default CanvasModel;
