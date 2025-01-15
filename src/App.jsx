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
import GenerateData from './GenerateData';
import GenerateMovieData from './GenerateMovieData';

export const AppContext = React.createContext();

function App() {
  const [data, setData] = useState([]); 
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await GenerateData();
        const fetchedMovie = await GenerateMovieData();
        setData(fetchedData); 
        setMovieData(fetchedMovie);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
