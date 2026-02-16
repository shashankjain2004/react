import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card.jsx'
import Card2 from './component/Card2.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    username: "Shashank Jain",
    age:21
  }

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>Tailwind test</h1>
    <Card2 username="Nancy" btnText="click me"/>
    <br/>
    <Card2 username="Delba" />
    </>
  )
}

export default App
