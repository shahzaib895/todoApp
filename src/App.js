import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Footer from './components/Footer';
import About from './components/About';
function App() {
  const [showAddTask,setAddTask] = useState(false)
  const [tasks , setTasks] = useState([])
  useEffect(()=>{
    const dataFromServer = async ()=>{
      const taskFromServer = await getData()
      console.log(taskFromServer  )
      setTasks(taskFromServer)
    }
    dataFromServer()
  },[])

  const getData = async () => {
    const res = await fetch('http://localhost:5000/Tasks')
    const data = await res.json()
    console.log(data)
    return data
  }

  const getOneTask = async (id) => {
    const res = await fetch(`http://localhost:5000/Tasks/${id}`)
    const oneTask = await res.json()
    return oneTask
  }


const taskDelete = async (id) => {
  await fetch(`http://localhost:5000/Tasks/${id}`, { method: 'DELETE', })
  setTasks(tasks.filter((task) => task.id !== id))
}
const mark = async (id) => {
  const taskToToggle = await getOneTask(id)
  const toggleTask = {...taskToToggle, mark: !taskToToggle.mark}
  const res = await fetch('http://localhost:5000/Tasks' , { method: 'PUT' , headers: {'content-type': 'application/json'}, body: JSON.stringify(toggleTask) 
  })
  const data = await res.json()
  setTasks(tasks.map((task) => task.id === id? {...task, mark: data.mark }: task ))
}
const addTask = async (tsk) => { 
  const res = await fetch(`http://localhost:5000/Tasks`,{method: 'POST', headers:{'content-type': 'application/json'}, body: JSON.stringify(tsk)})
  const data = await res.json()
  setTasks([...tasks,data]) 
}


  return (
    <div  className="App">
      <Header onAdd={()=> setAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
    <BrowserRouter>
    <Routes>   
    <Route path='/' exact element={
      <div>
         {tasks?<Tasks tasks={tasks } checked={mark} deletion={taskDelete}/>: 'No Task'}
      </div>
    }/>
    <Route path='/about' element={<About/>}/>
    </Routes>
    <Footer/>

    </BrowserRouter>
 </div>
  );
}

export default App;
