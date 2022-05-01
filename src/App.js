import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Pages/Components/Nav';
import Home from './Pages/Home';
import Results from './Pages/Results';
import Search from './Pages/Components/Search';
import {  Routes, Route, Link } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <Nav />
      <div id='hero-container'>
        <div style={{color: "black"}} id='hero-welcome-text'>
         <h2>Welcome to the Poke App!</h2>
         <p>The best place to get information on your favorite Pokemon!</p>
        </div>
        <div id='search-container'>
        <Search />
        </div>
      </div>

      <Routes>
        <Route path="/Poke-App" element={<Home />} />
        <Route path="/results/:search" element={<Results />} />
      </Routes>
    </div>
  );
}

export default App;
