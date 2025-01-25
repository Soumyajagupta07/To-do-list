import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListDisplay from './ListDisplay'

function App() {
  const[textVal, setTextVal]=useState("")
  const[taskList, setTaskList]=useState([])

  function changeTextVal(e){
    setTextVal(e.target.value)
  }

  const addTaskfn=()=>{
    if(textVal==="")
      alert("Enter task to add")
    else{
      taskList.push(textVal)
      setTaskList(taskList)
      setTextVal("")
    }
  }

  const list=[1,2,3]

  return (
    <>
      <input type="text" value={textVal} onChange={changeTextVal} />
      <button onClick={addTaskfn}>Add</button>
      {
        (taskList.length===0)?<p>All task completed</p>
        :
        (
          taskList.map((task)=>(
            <li>{task}</li>
          ))
        )
      }
      {
        list.map(num=>{
          return(
            <ListDisplay value={num}/>
          )
        })
      }
    </>
  )
}

export default App
