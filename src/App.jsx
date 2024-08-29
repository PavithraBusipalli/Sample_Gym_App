import { useState } from 'react'
import './App.css'
import MyCard from './components/Card'
import coaches from './sample.json';
import Render from './components/Render';

function App() {

  return (
    <>
      <Render list={coaches}/>
    </>
  )
}

export default App
