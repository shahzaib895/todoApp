import React from 'react'
import '../App.css';

const Header = ({onAdd, showAdd}) => {
  return (
    <div className='header-heading'>
      Todo List
      <button className='header-add' onClick={onAdd}>{showAdd? 'Close' : 'Add '}</button>
    </div>
  )
}

export default Header
