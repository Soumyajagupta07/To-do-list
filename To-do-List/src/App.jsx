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

  const[list,setList]=useState([1,2,3])
  const[num_val,setNumVal]=useState()

  function changeVal(e){
    (!isNaN(e.target.value))?setNumVal(Number(e.target.value)):alert("Enter a number")
  }

  function addfn(){
    
    let max_val=Math.max(...list)+num_val
    setList([...list,max_val])
    setNumVal("")
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
      <input type="text" value={num_val} onChange={changeVal}/><button onClick={addfn}>Add</button>
      {
        list.map(num=>{
          return(
            <ListDisplay value={num} />
          )
        })
      }
    </>
  )
}

export default App
