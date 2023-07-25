import React from 'react';
import { initialFriends } from './initialFriends';
import { FriendList } from './FriendList';
import { FormAddFriends } from './FormAddFriends';
import { MainForm } from './MainForm';
import { useState } from 'react';



const App=() =>{

  const [showAddFriends, setShowAddFriends] = useState(false);
  const [selectedFriend, setselectedFriend] = useState(null);
  const [searchField, setsearchField] = useState("");
  const [imageData, setimageData] = useState("");
  const [friendList, setFriendList] = useState(initialFriends)
  const [balanceState,  setBalanceState]=useState(0);

  

  const handleAddFriends = (event) =>{
    setShowAddFriends(!showAddFriends);
  }

  console.log("from app form",selectedFriend)
  
  return(
    <div className='app'>
      <div className='sidebar'>
      <FriendList
      friendList={friendList}
      selectedFriend={selectedFriend}
      balanceState={balanceState}  
      setselectedFriend={setselectedFriend}
      setBalanceState={setBalanceState}
      />
       

      {showAddFriends&&
      <FormAddFriends 
      friendList={friendList}
      searchField={searchField}
      imageData={imageData}
      setimageData={setimageData} 
      setsearchField={setsearchField} 
      setFriendList={setFriendList}
      />}
      
        <button 
          onClick={handleAddFriends} 
          className='button'>
          {showAddFriends?"Close":"Add Friends"}
        </button>
      </div>

      {selectedFriend&&
      <MainForm 
      selectedFriend={selectedFriend}
      balanceState={balanceState}  
      setBalanceState={setBalanceState}
      />}
      
    </div>
  )
}

export default App;
