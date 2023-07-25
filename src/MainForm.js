import React, { useEffect } from 'react'
import { useState } from 'react'

export const MainForm = ({selectedFriend, balanceState,  setBalanceState }) =>{
    const [Bill, setBill] = useState();
    const [userExpense, setUserExpense] = useState();
    const [friendsExpense, setFriendsExpense] = useState();
    const [payingBill, setPayingBill] = useState("You");

    useEffect(()=>{
        console.log("checking balance state", balanceState)
        
    },[balanceState, selectedFriend?.id])


   
    const handleDropDownChange=(event)=>{
        const value=event.target.value
        console.log(event.target.value)
        setPayingBill(value)
    }
 
    const handleSplitBill=(event)=>{

        
        event.preventDefault();
        console.log("Whos paying: ",payingBill)
        if(payingBill==='You'){
           
            setBalanceState((amount)=>{
                let OldTransac=balanceState;
                let bal=0;
                bal=Bill-userExpense;
                amount=bal+OldTransac;
                return(amount);
            })

            
        }
        
        else{
            
            setBalanceState((amount)=>{
                let OldTransac=balanceState;
                let bal=0;
                bal=Bill-friendsExpense;
                amount=(-bal)+OldTransac;
                return(amount);
            })
        }
            setBill("");
            setFriendsExpense("");
            setUserExpense("");
            setPayingBill("You")
    
    }

    const handleUserExpenseInput = (event) =>{
        let userAmount=Number(event.target.value);
        setUserExpense(Number(event.target.value));
        setFriendsExpense(Bill-userAmount)

    }
    
    return(
        <form className='form-split-bill'>
            <h2>Split the bill with {selectedFriend.name}</h2>

            <label>Bill</label>
            <input 
            value={Bill}
            type="text" 
            onChange={(event)=>setBill(Number(event.target.value))}/>

            <label>Your expense</label>
            <input 
            value={userExpense}
            type="text"
            onChange={handleUserExpenseInput}/>

            <label  >{selectedFriend.name}'s expense</label>
            <input 
            disabled={true}
            value={friendsExpense}
            type="text"
            onChange={(event)=>setFriendsExpense(Number(event.target.value))}/>

            <label>Who is paying for the bill?</label>
            <select value={payingBill} onChange={handleDropDownChange}>
                <option value="You">
                    You
                </option>
                <option value="Friend">
                    {selectedFriend.name}
                </option>

            </select>
            <button onClick={handleSplitBill} type="submit" className="button">Split Bill</button>
        </form>
    )
}