import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Route, Routes, BrowserRouter, useNavigate } from 'react-router-dom'

import Inicio from './estructura/Inicio'
import Cards from './estructura/paginas/Cards'
import Modos from './estructura/paginas/Modos'
import Tutorial from './estructura/paginas/Tutorial'
import Profiles from './estructura/paginas/players/Profiles.jsx'
import Gorra from './estructura/paginas/players/gorra/Gorra.jsx'
import Julio from './estructura/paginas/players/julio/Julio.jsx'
import Negro from './estructura/paginas/players/negro/Negro.jsx'
import Heroes from './estructura/paginas/Heroes.jsx'

import Brujo from './estructura/paginas/heroes/Brujo.jsx'
import CaballeroMuerte from './estructura/paginas/heroes/CaballeroMuerte.jsx'
import Cazador from './estructura/paginas/heroes/Cazador.jsx'
import CazadorDemonios from './estructura/paginas/heroes/CazadorDemonios.jsx'
import Chaman from './estructura/paginas/heroes/Chaman.jsx'
import Druida from './estructura/paginas/heroes/Druida.jsx'
import Guerrero from './estructura/paginas/heroes/Guerrero.jsx'
import Mago from './estructura/paginas/heroes/Mago.jsx'
import Paladin from './estructura/paginas/heroes/Paladin.jsx'
import Picaro from './estructura/paginas/heroes/Picaro.jsx'
import Sacerdote from './estructura/paginas/heroes/Sacerdote.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/album' element={<Cards/>}/>
          <Route path='/heroes' element={<heroes/>}/>
          <Route path='/modes' element={<Modos/>}/>
          <Route path='/tutorial' element={<Tutorial/>}/>
          <Route path='/profiles' element={<Profiles/>}/>
          {/* ---------------------------------------------- */}
          <Route path='/profiles/gorra' element={<Gorra/>}/>
          <Route path='/profiles/negro' element={<Negro/>}/>
          <Route path='/profiles/julio' element={<Julio/>}/>
          {/* ---------------------------------------------- */}
          <Route path='/heroes/brujo' element={<Brujo/>}/>
          <Route path='/heroes/caballero-muerte' element={<CaballeroMuerte/>}/>
          <Route path='/heroes/cazador' element={<Cazador/>}/>
          <Route path='/heroes/cazador-demonios' element={<CazadorDemonios/>}/>
          <Route path='/heroes/chaman' element={<Chaman/>}/>
          <Route path='/heroes/druida' element={<Druida/>}/>
          <Route path='/heroes/guerrero' element={<Guerrero/>}/>
          <Route path='/heroes/mago' element={<Mago/>}/>
          <Route path='/heroes/paladin' element={<Paladin/>}/>
          <Route path='/heroes/picaro' element={<Picaro/>}/>
          <Route path='/heroes/sacerdote' element={<Sacerdote/>}/>

        </Routes>
      </BrowserRouter>
  </StrictMode>,
)
