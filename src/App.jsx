import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Contact from './pages/Contact'
import Movies from './pages/Movies'
import Scripts from './pages/Scripts';

export const AppContext = React.createContext();

function App() {
  const [data, setData] = useState([])
  const [movieData, setMovieData] = useState([])

  const fetchData = () => {
    fetch('http://localhost:4000/slides')
    .then(res=>res.json())
    .then(data => setData(data))
    .catch(e => console.log(e.message))

    fetch('http://localhost:5000/slides')
    .then(res=>res.json())
    .then(movieData => setMovieData(movieData))
    .catch(e=>console.log(e.message))
  };

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <>
      <Router>
        <AppContext.Provider value={{ data, movieData }}>
          <Sidebar>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/movies' element={<Movies/>} />
              <Route path='/scripts' element={<Scripts/>} />
              <Route path='/contact' element={<Contact/>} />
            </Routes>
          </Sidebar>
        </AppContext.Provider>
      </Router>
    </>
  )
}

export default App
