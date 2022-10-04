import React from 'react';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App() { 
  let hero = "Hola Mundo";
  return (
    <div className="App">
      
      <BrowserRouter>
        <header className="App-header">
          <NavBar/>
          <h1>{hero}</h1>
        </header>
        
        <Routes>
          <Route path="*" element={<h1>Te perdiste pedazo de Iriota</h1>}/>
          <Route path="/" element={<ItemListContainer/>}></Route>
          <Route path="/detalle/:id" element={<ItemDetailContainer/>}></Route>
          <Route path="/categoria/:cat" element={<ItemListContainer/>}></Route>
          <Route path='/cart'></Route>
        </Routes>
        
      </BrowserRouter>
    </div>
  ); 
}

export default App;
