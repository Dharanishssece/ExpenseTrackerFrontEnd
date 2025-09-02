import React, { useState } from 'react';
function Form(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  
  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleAmountChange(e) {
    setAmount(Number(e.target.value));
  }

  function handleSubmit(e) {
    e.preventDefault();
      setTitle('');
      setAmount('');
      if(title && amount) {
        props.addExpense(title, amount);
      }
  }
   

    
  

  return (
    <div className='expense-form'>
      <h1>Add Expense</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label className='form-label'>Title</label>
          <input
            type='text'
            value={title}
            onChange={handleTitleChange}
            className='form-input'
          />    
        </div>
        <div className='form-group'>
          <label className='form-label'>Amount</label>
          <input
            type='number'
            value={amount}
            placeholder='0'
            onChange={handleAmountChange}
            className='form-input'
          />    
        </div>
        <button type="submit">Add Amount</button>
      </form>
    </div>
  );
}

export default Form;
