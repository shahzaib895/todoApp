import React from 'react'
import Task from './Task'

const Tasks = ({ tasks , deletion , checked }) => {
  return (
  <>
 { tasks.map((task) =>{
   return (<Task task ={task} deletion={deletion} checked={checked}></Task>)
  })}
  </>
  )
}

export default Tasks
