import './App.css';
import NotesContainer from './components/NotesContainer/NotesContainer';
import NoteDetailContainer from './components/NoteDetailContainer/NoteDetailContainer';
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Bookmarks from './components/Bookmarks/Bookmarks';
import { BookmarksProvider } from './context/BookmarksContext';
import Login from './components/Login/Login'
import { AuthProvider } from './context/AuthContext';
import { useState, createContext } from 'react';
import { NotificationProvidar } from './context/NotificationContext';




function App() {
  
  return (
    <div className="App">
      <NotificationProvidar>
        <AuthProvider>
          <BookmarksProvider>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path='/' element={<NotesContainer />}/>
                <Route path='/category/:categoryId' element={<NotesContainer />}/>
                <Route path='/note/:noteId' element={<NoteDetailContainer /> } />
                <Route path='/bookmarks' element={<Bookmarks /> } />
                <Route path='/login' element={<Login /> } />
              </Routes>
            </BrowserRouter>
          </BookmarksProvider>
        </AuthProvider>
      </NotificationProvidar>
    </div>
  );
}

export default App;
