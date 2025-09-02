import React from 'react'
import ExpenseItem from './ExpenseItem'
function History(props) {
  return (
    <div className='history'>
        
            <h1>History</h1>
            {
                props.expense.map((item)=>(
                <ExpenseItem key={item._id} expense={item} deleteExpense={props.deleteExpense}/>
            ))
            }
    </div>
  )
}

export default History