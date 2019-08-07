import React from 'react';
import './App.css';
import Chat from './Components/Chat';
import books from './dummyData';

function App() {
  return (
    <div className='App'>
      <Chat />
      <img src={books[0].image} alt='books' />
    </div>
  );
}

export default App;
