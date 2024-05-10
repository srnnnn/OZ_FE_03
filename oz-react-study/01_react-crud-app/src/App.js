import { Component, useState } from "react";
import './App.css';
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Alert from "./components/Alert";

const App = () => {

  const [expenses, setExpenses] = useState([
    {id: 1, charge: '제로콜라', amount:2000},
    {id: 2, charge: '빵', amount:1000},
    {id: 3, charge: '맥북에어', amount:1500000},
  ])

  const [charge, setCharge] = useState("");
  const [amount, setamount] = useState(0); 
  const [id, setId] = useState('')

  const [edit, setEdit] = useState(false);

  const [alert, setAlert] = useState({show:false})

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

    handleAlert({type:"danger",text:"아이템이 삭제되었습니다"})

  }

  const handleEdit = id => {
    const expense = expenses.find(item => item.id === id);
    const {charge, amount} = expense;
    setCharge(charge);
    setamount(amount);
    setId(id);
    setEdit(true);
  }

  const clearItems = () => {
    setExpenses([]);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(charge !== "" && amount > 0){
      if(edit){
        const newExpenses = expenses.map(item => {
          return item.id === id? {...item, charge, amount}:item;
        })
        setExpenses(newExpenses);
        setEdit(false);
        handleAlert({type:"success", text:"아이템이 수정되었습니다"});
      }else{
        const newExpense = {id: crypto.randomUUID(), charge, amount}
        const newExpenses = [...expenses, newExpense];
        setExpenses(newExpenses);
        handleAlert({type:"success",text:"아이템이 생성되었습니다"})
      }

      setCharge("");
      setamount(0);

    }else{
      console.log('error')
      handleAlert({type:"danger",text:"charge는 빈 값일 수 없으며, amount는 0보다 커야합니다"})
    }
  }

  const handleAlert = ({type,text}) =>{
    setAlert({show:true, type, text});
    setTimeout(() => {
      setAlert({show:true})
    }, 7000);
  }

    return(
      <main className="main-container">
        <div className="sub-container">
          {alert.show?<Alert type={alert.type} text={alert.text}/>: null}
          <h1>장바구니</h1>
          <div style={{width: '100%', background: 'white', padding:'1rem'}}>
          {/*Expense Form */}
          <ExpenseForm edit={edit} charge={charge} handleCharge={handleCharge} amount={amount} handleAmount={handleAmount} handleSubmit={handleSubmit}/>
          </div>

          <div style={{width: '100%', background: 'white', padding:'1rem'}}>
            {/*Expense List */}
            <ExpenseList expenses={expenses} clearItems={clearItems} handleEdit={handleEdit} initialExpenses={expenses} handleDelete={handleDelete}/> {/*this는 현재 클래스*/}
          </div>

          <div style={{display: 'flex', justifyContent:'start', marginTop: '1rem'}}> 
            <p style={{fontSize: '2rem'}}>
              총합계:
              <span>
                {expenses.reduce((acc,curr)=>{
                  return (acc += curr.amount)
                },0)}원
              </span>
            </p> 
          </div>
        </div>
      </main>
    )
  
}

export default App;