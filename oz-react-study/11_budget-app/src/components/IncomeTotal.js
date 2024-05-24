import React, { useContext } from 'react'
import { formatNumberToWon } from '../utils'
import { AppContext } from '../contexts/AppContext'

const IncomeTotal = () => {

    const {incomes, budget} = useContext(AppContext);
    console.log('incometotal ',budget)
    
    const total = incomes.reduce((total,income )=>{
        return (total += income.cost)
    },0)

  return (
    <div className='alert p-4 alert-success'>
        <span>총 수입: {formatNumberToWon(total)}원</span>
    </div>
  )
}

export default IncomeTotal