import React from 'react'
import noPic from './img/no_pic.jpeg';


export const FormAddFriends=({imageData,searchField,setimageData, setsearchField,friendList, setFriendList})=>{
    

    const handleAddFriendSubmission=(event)=>{
        event.preventDefault();
        let newFriendInfo ={
                id: Date.now(),
                name: searchField,
                image: (imageData ===""?noPic :imageData),
                balance: 0,
            };
        
        setFriendList([...friendList, newFriendInfo])
        console.log(friendList);

        setsearchField("");
        setimageData("");

        
    }



    const Button =({children, onClickEvent, typeOfButton})=>{
        return(
            <button onClick={onClickEvent} className="button" type={typeOfButton}>{children}</button>
        )
    }

    return(
        <form className="form-add-friend">
            <label>Friend's Name</label>
            <input value={searchField} onChange={(event)=>setsearchField(event.target.value)} type="text" placeholder='New Friends name'/>

            <label>Image</label>
            <input value={imageData} onChange={(event)=>setimageData(event.target.value)} type="text" placeholder='image url'/>

            <Button onClickEvent={handleAddFriendSubmission} typeOfButton={"submit"}>Add</Button>

        </form>
    )

}