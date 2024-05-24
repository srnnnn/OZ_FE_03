import React, { useContext} from 'react'
import { AppContext } from '../contexts/AppContext'
import IncomeItem from './IncomeItem';

const IncomeList = () => {

    const {incomes} = useContext (AppContext);  
    console.log(incomes);

  return (
    <>
        <ul className='list-group mt-3 mb-3'>
            {incomes.map((income)=>(
                <IncomeItem 
                    key={income.id}
                    id={income.id}
                    name={income.name}
                    cost={income.cost}
                />
            ))}
        </ul>
    </>
  )
}

export default IncomeList