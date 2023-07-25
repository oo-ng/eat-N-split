import React, { useEffect, useState } from 'react'


export const Profile =({ balanceState,friends,selectedFriend, setselectedFriend, setBalanceState })=>{

   

    const {id,name,image,balance, }= friends;
    
    const [truBalance,setTruBalance]= useState(friends.balance);

    console.log("trubalance",truBalance)
    console.log(balanceState)

    useEffect(() => {
        
        if(id === selectedFriend?.id){
            
            setTruBalance(balanceState);
            
        }
    },[balanceState])

    const handleSplitBillForm =(event)=>{
        setselectedFriend(friends)
        
    }


    const checkBalance = ()=>
    {
        
        
        if(truBalance<0){
             return (
                <span className="red"> You owe {name} ${Math.abs(truBalance)}</span>
            )
    
        } else if(truBalance>0){
           return(<span className="green"> {name} owes you  ${truBalance}</span>)
        }else{
            return(<span> You and {name} are even</span>)
        }
    
   }



    
    return(
        
            <li>
                <img alt='img' src={image}/>
                <h3>{name}</h3>
                <p>{checkBalance()}</p>
                <button onClick={handleSplitBillForm} className="button">select</button>
                
            </li>
     
    )
}