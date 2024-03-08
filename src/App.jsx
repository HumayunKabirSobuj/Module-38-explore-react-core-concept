import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Conditional from './Conditional'
import Actor from './Actor'
import Singer from './Singer'


function App() {

  const actors = ['Sakib', 'Shoriful raj', 'Jasim', 'Rubel', 'Salman Shah'];
  const singers = [
    { id: 1, name: 'Dr. Mahfuzur Rahman', age: 65 },
    { id: 2, name: 'Eva Rahman', age: 35 },
    { id: 3, name: 'Suvro Dev', age: 58 },
    { id: 4, name: 'Pritom', age: 28 }
  ]

  return (
    <>

      <h1>Vite + React</h1>
      {
        singers.map(singer=> <Singer singer={singer}></Singer>)
      }
      
      <Actor name='Bappa Raj'></Actor>


      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }


      {/* <Myfriend></Myfriend>
      <Todo name='humayun' age='20'></Todo>
      <Conditional task='Learn React Basic Component' isDone={true}></Conditional>
      <Conditional task='Learn React ' isDone={false}></Conditional>
      <Conditional task='Learn JavaScript ' isDone={true}></Conditional> */}


    </>
  )
}

function Myfriend() {
  return (
    <div>
      <h1>Hello, I am humayun kabir sobuj</h1>
      <h2>I studied in rangpur polytechnic institute, Rangpur</h2>
    </div>
  )
}

export default App
