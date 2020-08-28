import React from 'react';
import './App.css';
import Header from './Components/Header'
import Main from './Components/Main'
import ContactCard from './Components/ContactCard'

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <ContactCard
        name="Jin Ku Kim"
        number="02102428857"
        email="jkkim1998@gmail.com"
      />
    </div>
  );
}

export default App;
