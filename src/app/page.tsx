import React from 'react';
import Hero from '../components/Hero';
import Nav from '../components/Nav';

const Home: React.FC = () => {
  return (
    <div className="relative">
      <Hero />
      <Nav />
    </div>
  );
};

export default Home;