import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import { formatNumberToWon } from '../utils';

const Remaining = () => {

  const {expenses, budget , incomes} = useContext(AppContext);

  const totalExpenses = expenses.reduce((total,item)=>{
    return (total += item.cost)
  },0)

  const totalIncomes = incomes.reduce((total, income)=> {
    return (total += income.cost)
  },0)

  const alertType = totalExpenses > totalIncomes ? 'alert-danger': 'alert-success';

  return (
    <div className={`alert p-4 ${alertType}`}>
      <span>남은 돈: {formatNumberToWon(totalIncomes - totalExpenses) }원</span>
    </div>
  )
}

export default Remaining 