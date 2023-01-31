import { Routes, Route } from 'react-router-dom';
import Home from '../component/home/Home';
import Menu from '../component/menu/Menu';
import Contact from '../component/contact/Contact';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menufood" element={<Menu type="food" />} />
      <Route path="/menudrink" element={<Menu type="drink" />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}