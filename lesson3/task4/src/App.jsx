import React from 'react';
import Greeting from './Greeting';

const App = () => {
  return (
    <Greeting
      firstName="John"
      lastName="Doe"
      birthDate={new Date("2004-01-01")}
    />
  );
};

export default App;