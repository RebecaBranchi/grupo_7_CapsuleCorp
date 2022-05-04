import React from 'react';
import './App.css';

import NavBar from './components/NavBar';

import Total from './components/Total';



function App() {
  return (
    <body>
   
      <header>
      <NavBar/>
      </header>

  
      <main> 
        <Total/>
      </main>

    </body>
  );
}

export default App;
