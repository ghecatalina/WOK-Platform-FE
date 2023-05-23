import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import ReserveTable from './pages/Reservations/ReserveTable';
import Menu from './pages/Menu/Menu';
import Login from './pages/Admin/Login/Login';
import Categories from './pages/Admin/Categories/Categories';
import Items from './pages/Admin/Items/Items';
import DailyMenu from './pages/Menu/DailyMenu';
import Reservations from './pages/Admin/Reservations/Reservations';
import Contacts from './pages/Admin/Contacts/Contacts';
import Messages from './pages/Messages/Messages';
import MessagesFromClient from './pages/Admin/Messages/MessagesFromClient';

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
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/admin/categories' element={<Categories />} />
        <Route exact path='/admin/categories/:categoryId/items' element={<Items />} />
        <Route exact path='/admin/dailymenu' element={<DailyMenu />} />
        <Route exact path='/admin/reservations' element={<Reservations />} />
        <Route exact path='/admin/contacts' element={<Contacts />} />
        {['/worker/messages', '/admin/messages']
        .map(path => <Route path={path} element={<MessagesFromClient />} />)}
        <Route exact path='/messages/:tableId' element={<Messages />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
