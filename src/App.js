import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Component1 from './components/Component1';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/propagation'>Propagation</Link>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/propagation' element={<Component1 />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
