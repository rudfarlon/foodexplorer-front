import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Menu } from '../pages/Menu';
import { Details } from '../pages/Details';
import { EditPlate } from '../pages/EditPlate';
import { NewPlate } from '../pages/NewPlate';

export function AppRoutes() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/edit" element={<EditPlate />} />
      <Route path="/new" element={<NewPlate />} />
    </Routes> 
  )
}