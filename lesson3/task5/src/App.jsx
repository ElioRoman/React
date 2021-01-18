import React from 'react';
import Profile from './Profile';

const user = {
  firstName: 'John',
  lastName: 'Doe',
  birthDate: '1991-01-17T11:11:11.819Z',
  birthPlace: 'London'
};


const App = () => {
  return (
    <Profile userData = {user}
    />
  );
};

export default App;