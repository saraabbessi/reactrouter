import './App.css';

import Contact from './components/Contact';
import Home from './components/Home';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ListMovies from './components/ListMovies';
import Trailer from './components/Trailer';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Routes>
      <Route path ="/" element ={<Home />}/>
      <Route path="/movies" element={<ListMovies />}/>
      <Route path ="/contact/:name/:id" element={<Contact />} />
      <Route path="/trailer/:id" element={<Trailer/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
