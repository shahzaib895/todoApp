import React, { useState } from 'react'

const AddTask = ({onAdd}) => {
const [task,setTask] = useState('')
const [day,setDay] = useState('')
const [mark, setMark] = useState(false)

const onSubmit=(e)=>{
  e.preventDefault()
  if(!task){
    alert('Please Add task')
    return
  }
  onAdd({task,day,mark})
  setTask('')
  setDay('')
  setMark('')
}

  return (
    <div className='formtoAdd'>
      <form action="submit" onSubmit={onSubmit}>
      <div className='field'>
      <span className='label'> task: </span><input type="text" vlaue={task} onChange={(e)=> setTask(e.target.value)} />
      </div>
      <div className='field'>
      <span className='label'> Day: </span><input type="date" vlaue={day} onChange={(e)=> setDay(e.target.value)} />
      </div>
      <div className='field'>
      <span className='label'> Reminder: </span><input type="checkbox" checked={mark} vlaue={mark} onChange={(e)=> setMark(e.currentTarget.checked)} />
      </div>
      <div className='field'>
      <input type="submit" value='Add Task' />
      </div>
      </form>
    </div>
  )
}

export default AddTask
