import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';

import { Balance } from './components/Balance'

import { Accountsummary } from './components/Accountsummary'
import { Addtransaction } from './components/Addtransaction'
import { Transactionhistory } from './components/Transactionhistory'

function App() {
  const [darkMode,setDarkmode]=React.useState(false);
  return (  

    <div className={darkMode ? "dark_mode" : "light_mode" } > 
    <Header  />
  <div>
    <button onClick={()=>setDarkmode(prevMode => !prevMode)}>Toggle Mode</button>
  </div>
    <div >
      <Balance />
    </div>
   <div className={darkMode ? "container1" : "container" }>
     <Accountsummary />
   </div>
   <div>
     <Transactionhistory />
  
   </div>
   <div>
   <Addtransaction />
   </div>
  </div>
  );
}

export default App;
