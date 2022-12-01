import './App.css';
import NotesContainer from './components/NotesContainer/NotesContainer';
import NoteDetailContainer from './components/NoteDetailContainer/NoteDetailContainer';
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<NotesContainer />}/>
          <Route path='/category/:categoryId' element={<NotesContainer />}/>
          <Route path='/note/:noteId' element={<NoteDetailContainer /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
