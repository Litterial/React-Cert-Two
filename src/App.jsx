import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SelectTrivia from "./SelectTrivia.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <SelectTrivia />
    </>

  )
}

export default App
