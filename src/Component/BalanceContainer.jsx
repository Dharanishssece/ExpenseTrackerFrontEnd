import React from 'react'
import CurrentItem from './CurrentItem.jsx';
function BalanceContainer(props) {
    let income = 0;
    let expense = 0;
    props.expense.forEach((item) => {
        if(item.amount>0){
            income += parseInt(item.amount);
        }
        else{
            expense+=parseInt(item.amount);
        }
    });
    console.log(income);
    console.log(expense);
    return (
        <div className='balance-container'>
            <CurrentItem title="income" amount={income} type="income"/>
            <CurrentItem title="expense" amount={expense} type="expense"/>
            <CurrentItem title="balance" amount={income+expense} type="balance"/>
        </div>
    )
}
export default BalanceContainer