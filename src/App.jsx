import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Name from './components/Name' //Component path
// Calling multiple components file and just calling specific components
import {Bus,Car,Garage} from './components/Vehicles'

function App() {
  const [count, setCount] = useState(0)
  const myElement = <h1>Hello React!</h1>; // ele
  return (
   <div className="app-container">
     {myElement} {/* Calling html ele */}
     <Name/> {/* Calling the Fun component */}
     <hr class="h-1 bg-gray-500 my-5" />

     <Garage/>
     
   </div>
  )
}

export default App
