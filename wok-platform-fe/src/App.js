import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReserveTable from './pages/ReserveTable';
import Login from './pages/Admin/Login';
import Categories from './pages/Admin/Categories';
import Items from './pages/Admin/Items';
import ItemEdit from './pages/Admin/ItemEdit';
import DailyMenu from './pages/Admin/DailyMenu';
import Reservations from './pages/Admin/Reservations';
import Contacts from './pages/Admin/Contacts';
import Messages from './pages/Messages';
import MessagesFromClient from './pages/Admin/MessagesFromClient';

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
        <Route exact path='/admin/categories/:categoryId/items/:itemId' element={<ItemEdit />} />
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
