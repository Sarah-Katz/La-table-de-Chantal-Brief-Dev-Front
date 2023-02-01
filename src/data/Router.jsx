import { Routes, Route } from 'react-router-dom';
import Home from '../component/home/Home';
import Menu from '../component/menu/Menu';
import Contact from '../component/contact/Contact';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menufood" element={<Menu key="food" isFood={true} />} />
      <Route path="/menudrink" element={<Menu key="drink" isFood={false} />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}