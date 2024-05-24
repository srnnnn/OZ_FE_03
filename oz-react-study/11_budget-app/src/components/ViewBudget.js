import React from 'react'
import { formatNumberToWon } from '../utils'

const ViewBudget = ({budget, setisEditing}) => {
  return (
    <>
      <span>예산: {formatNumberToWon(budget)}</span>
      <button type='button' className='btn btn-primary' onClick={()=> setisEditing(true)}>수정</button>
    </>
  )
}

export default ViewBudget 