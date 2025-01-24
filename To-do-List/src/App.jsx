import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
    </>
  )
}

export default App
