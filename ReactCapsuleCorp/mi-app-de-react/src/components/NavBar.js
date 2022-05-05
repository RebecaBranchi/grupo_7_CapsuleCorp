import React from "react";
import ListsProducts from './ListsProducts'
import Logo from './Logo';
import {Link, Routes,  Route} from "react-router-dom";
import ListsTotal from './ListsTotal'

function NavBar (){
  
return( 
 <div>

<ul>
 <li><Link to="/">Inicio</Link></li>
  <li><Link to="/products">Productos</Link></li>
  <li><Link to="/categories">Categorias</Link></li>
  <li><Link to="/brands">Marcas</Link></li>
  </ul>
  <Logo/>

<Routes>

  <Route path="/" element={<ListsTotal />} />
  <Route path="/products" element={<ListsProducts />} />
  
</Routes>


</div>

)}

export default NavBar


