import React, { useContext } from 'react'
import {TiDelete} from 'react-icons/ti';
import { AppContext } from '../contexts/AppContext';
import { formatNumberToWon } from '../utils';

const ExpenseItem = ({id, name, cost}) => {

  const {dispatch} = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: id
    })
  }

  return (
    <li 
    className='list-group-item d-flex
    justify-content-between
    align-itmes-center'>
      {name}
      <div>
        <span className='badge bg-success me-3'>{formatNumberToWon(cost)}</span>
        <TiDelete size={'1.5rem'} onClick={handleDeleteExpense}/>
      </div>
    </li>
  )
}

export default ExpenseItem