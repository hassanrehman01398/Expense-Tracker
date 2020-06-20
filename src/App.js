import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';

import { Balance } from './components/Balance'

import { Accountsummary } from './components/Accountsummary'
import { Addtransaction } from './components/Addtransaction'
import { Transactionhistory } from './components/Transactionhistory'

function App() {
  return (  
    <div>
    <Header />
  
    <div className="container">
      <Balance />
    </div>
   <div>
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
