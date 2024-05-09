import { Component, useState } from "react";
import './App.css';
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

const App = () => {

  const [expenses, setExpenses] = useState([
    {id: 1, charge: '제로콜라', amount:2000},
    {id: 2, charge: '빵', amount:1000},
    {id: 3, charge: '맥북에어', amount:20000},
  ])

  const [charge, setCharge] = useState("");
  const [amount, setamount] = useState(0);

  const handleCharge = (e) => {
    setCharge(e.target.value);
  }

  const handleAmount = (e) =>{
    setamount(e.target.valueAsNumber)
  }

  const handleDelete = (id) => {
    const newExpense = expenses.filter(expense => expense.id !== id);

    setExpenses(newExpense);
    // this.setState({expenses:newExpense}); //state를 변경해주는 (클래스형)

  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(charge !== "" && amount > 0){
      const newExpense = {id: crypto.randomUUID(), charge, amount}
      const newExpenses = [...expenses, newExpense];
      setExpenses(newExpenses);
      setCharge("");
      setamount(0);
    }else{
      console.log('error')
    }
  }

    return(
      <main className="main-container">
        <div className="sub-container">
          <h1>장바구니</h1>
          <div style={{width: '100%', background: 'white', padding:'1rem'}}>
          {/*Expense Form */}
          <ExpenseForm charge={charge} handleCharge={handleCharge} amount={amount} handleAmount={handleAmount} handleSubmit={handleSubmit}/>
          </div>

          <div style={{width: '100%', background: 'white', padding:'1rem'}}>
            {/*Expense List */}
            <ExpenseList initialExpenses={expenses} handleDelete={handleDelete}/> {/*this는 현재 클래스*/}
          </div>

          <div style={{display: 'flex', justifyContent:'start', marginTop: '1rem'}}> 
            <p style={{fontSize: '2rem'}}>
              총합계:
            </p> 
          </div>
        </div>
      </main>
    )
  
}

export default App;