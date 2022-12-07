
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from "./Component/Navbars";
import React from "react";
import { Photo } from './Component/Photo';
import { Route, Routes } from "react-router-dom";
import Story from './Component/Story';
import Short from './Component/Short';
import Nopages from './Component/Nopages';
import {Home} from './Component/Home';

function App() {
  return (
    <>
    <Navbars/>
      <Routes>
      <Route exact path='/' element={<Home />} />
        <Route exact path='/photo' element={<Photo />} />
        <Route exact path='/story' element={<Story />} />
        <Route exact path='/short' element={<Short />} />
        <Route exact path='*' element={<Nopages />} />
      </Routes>
    </>
  )
}

export default App;









