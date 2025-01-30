import { useState } from "react";
const TransactionForm=(props)=>{
    const[title,setTitle]=useState('')
    const[amount,setAmount]=useState(0)
    const handleSubmit=(e)=>{
        e.preventDefault();
        props.addTransaction(title,amount);
        //console.log(title,amount)
    }
    const handleTitleChange=(e)=>{
        console.log(e)
        setTitle(e.target.value)
    }
    const handleAmountChange=(e)=>{
        console.log(e)
        setAmount(e.target.value)
    }
    return(
        <div>
            
            <h2>New Transaction</h2>
            <hr />
            <form >
            <div>
            <label htmlFor="title">Title</label>
            <input type="text" name="" id="title" onChange={handleTitleChange}/>
            </div>
            <div>
                <label htmlFor="amount">Amount</label>
                <input type="number" id="amount"onChange={handleAmountChange} />
            </div>
            <button onClick={handleSubmit}>Add Transaction</button>
            </form>
            </div>
    )
}

export default TransactionForm;