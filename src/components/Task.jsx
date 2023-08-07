import React from 'react'
import '../App.css'
const Task = ({task , deletion, checked}) => {
  console.log(task)
  return (
    <div className='task-box'>
      <div className={`task_head ${task.mark? 'clicked':''}`} onDoubleClick={() => checked(task.id)}>
     <span className='task'>{task.id}</span>
     <span className='task'>{task.task}</span>
     <span className='task-day'>{task.day}</span>
     <button className='task-del' onClick={()=> deletion(task.id)}>Delete</button>
     </div>
    </div>
  )
}

export default Task
