import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReserveTable from './pages/ReserveTable';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/menu" element={<Menu/>} />
        <Route exact path="/reservations" element={<ReserveTable/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
