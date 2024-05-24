import React, { useContext } from 'react'
import {TiDelete} from 'react-icons/ti';
import { AppContext } from '../contexts/AppContext';
import { formatNumberToWon } from '../utils'

const IncomeItem = ({id, name, cost}) => {

    const {dispatch} = useContext(AppContext);

    const handleDeleteIncome = () => {
        dispatch({
          type: 'DELETE_INCOME',
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
        <span className='badge bg-dark me-3'>{formatNumberToWon(cost)}</span>
        <TiDelete size={'1.5rem'} onClick={handleDeleteIncome}/>
      </div>
    </li>
  )
}

export default IncomeItem