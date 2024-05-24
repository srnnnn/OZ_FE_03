import React, { useState } from 'react'

const EditBudget = ({budget, setisEditing, dispatch}) => {

  const [value, setValue] = useState(budget);

  const handleSaveClick = (value) => {
    dispatch({
      type: 'SET_BUDGET',
      payload: value
    })
    setisEditing(false);
  }
  return (
    <>
      <input required type='number' className='form-control me-3' id='name' value={value} onChange={(e)=>setValue(e.target.value)}/>
      <button type='button' className='btn btn-primary' style={{minWidth: 55}} onClick={() => handleSaveClick(value)}>수정</button>
    </>
  )
}

export default EditBudget