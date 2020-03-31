import React from 'react';
import './App.css';
import Header from './components/Header'
import MemeGenerator from './components/MemeGenerator'

/**
 * Create 2 new components - Header and MemeGenerator
 * Header will only display things
 * MemeGenerator will be calling to an API and holding on to data
 * Each should be in their own file of the same name
 */
function App() {
  return (
    <div className="App">
<Header />
<MemeGenerator />
    </div>
  );
}

export default App;
