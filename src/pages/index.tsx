import React from 'react';

import { Title } from '../styles/pages/Home';
import myFoto from '../assets/myImg.jpeg'

const Home: React.FC = () => {
  return (
    <>
      <Title>Hello World!</Title>
      <img src={myFoto} />
    </>
  );
}

export default Home;
