import React, { Component } from 'react'
import './ExpenseForm.css';

const ExpenseForm = ({charge, handleCharge, amount, handleAmount, handleSubmit}) => {

    return (
      <form onSubmit={handleSubmit}>
        <div className='form-center'>
            <div className='form-group'>
                <label htmlFor="charge">상품</label>
                <input type="text" className='form-control'  id="charge" name="charge" placeholder='예) 콜라'
                onChange={handleCharge}
                value={charge}>
                </input>
            </div>
            <div className='form-group'>
                <label htmlFor="amout">비용</label>
                <input type="number" className='form-control' id="amount" name="amount" placeholder='예) 100'
                value={amount}
                onChange={handleAmount}>
                </input>
            </div>
        </div>
        <button type="submit" className='btn'>
            제출
        </button>
      </form>
    )

}

export default ExpenseForm;
