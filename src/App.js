import './App.css';
import { useState } from 'react'
import Counter from './components/Counter/Counter';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  // console.log('render app')
  const [show, setShow] = useState(true)

  const handleOnAdd = (quantity) => {
    console.log('Se agrego al carrito ' + quantity)
  }

  return (
    <div className="App">
      <h1>Contador de click</h1>
      {/* <button onClick={() => setShow(!show)}>show/hide</button> */}
      <Counter initial={0} stock={15} onAdd={handleOnAdd}/>
      {/* { show ? <ItemListContainer /> : null} */}
    </div>
  );
}

export default App;
