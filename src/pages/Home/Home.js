import React from 'react'
import Card from '../../components/Card';
import CardDetails from '../../components/CardDetails';

import './style.css'

const Home = () => {
  return (
    <div id='card-information'>
      <Card />
      <CardDetails />
    </div>
  )
};

export default Home;
