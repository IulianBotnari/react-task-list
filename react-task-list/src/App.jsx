import { useState } from 'react'

import AppHeader from '../Components/AppHeader'
import AppMainCurrentTask from '../Components/AppMainCurrentTask'
import AppMainComplitedTask from '../Components/AppMainComplitedTask'

import './App.css'

function App() {


  return (
    <>
      <AppHeader />
      <AppMainCurrentTask />
      <AppMainComplitedTask />
    </>
  )
}

export default App
