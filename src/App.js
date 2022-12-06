import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Component1 from './components/Component1';
import MercadoLibre from './components/MercadoLibre';
import ItemDetail from './components/ItemDetail';
import Scroll from './components/Scroll';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/propagation'>Propagation</Link>
          <Link to='/mercadolibre'>MercadoLibre</Link>
          <Link to='/itemdetail'>ItemDetail</Link>
          <Link to='/scroll'>Scroll</Link>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/propagation' element={<Component1 />}/>
          <Route path='/mercadolibre' element={<MercadoLibre />}/>
          <Route path='/itemdetail' element={<ItemDetail />} />
          <Route path='/scroll' element={<Scroll />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
