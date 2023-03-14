import { useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import { Home } from './components/Home'
import { Nav } from './components/Nav'
import { Rey } from './components/Rey'
import { Error404 } from './pages/Error404'


function App() { 
  const reyes=[
    {
        nombre:"Atanagildo",
        reinado:15,
        vacasComidas:9
    },{
        nombre:"Ervigio",
        reinado:7,
        vacasComidas:3
    },{
        nombre:"Ataúlfo",
        reinado:5,
        vacasComidas:16
    },{
        nombre:"Leovigildo",
        reinado:18,
        vacasComidas:3
    },{
        nombre:"Sisebuto",
        reinado:9,
        vacasComidas:13
    },{
        nombre:"Recesvinto",
        reinado:19,
        vacasComidas:11
    },{
        nombre:"Teodorico",
        reinado:33,
        vacasComidas:12
    }
  ]
  return (
    <BrowserRouter>
      <Nav  reyes={reyes}/>
      <Routes>
        <Route path='/' element={<Home reyes={reyes}/>}></Route>
        <Route path='/home' element={<Home reyes={reyes}/>}></Route>
        {reyes.map(rey=>(
          <Route path=':nombre' element={<Rey />} key={rey.reinado}></Route>
        ))}
        <Route path='/*' element={<Error404 />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
