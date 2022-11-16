import { Routes, Route } from "react-router-dom"
import Inicio from '../Inicio/Inicio';
import Panel from '../Panel/Panel';
import Favoritos from '../Favoritos/Favoritos';
import Estadistica from '../Estadistica/Estadistica';
const Router = () => {
  return (
    <Routes>
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/panel' element={<Panel />} />
        <Route path='/favoritos' element={<Favoritos />} />
        <Route path='/estadistica' element={<Estadistica />} />
        <Route path='*' element={<Inicio />} />
    </Routes>
  )
}

export default Router