import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar colorTitle='red'/>
      <ItemListContainer greeting='Saludo de bienvenida'/>
    </div>
  );
}

export default App;
