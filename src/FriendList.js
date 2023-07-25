import React from 'react'
import { Profile } from './Profile'

export const FriendList =({friendList, selectedFriend, setselectedFriend, balanceState,  setBalanceState})=>{

    


    
    const renderingFriends= friendList.map((friend, i)=>{
        return(
        <Profile 
        key={i}
        friends={friend}
        selectedFriend={selectedFriend}
        setselectedFriend={setselectedFriend}
        balanceState={balanceState}  
        setBalanceState={setBalanceState}
        />
        )
    })
    
    return(
        <ul>
            {renderingFriends} 
        </ul>
    )

}