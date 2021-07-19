import React from 'react';
import Card from '../Card/Card';
import "./Display.css"
const Display = ({userList})=>{
    return(<div className="Display">
        {userList.map(user =>{
            return <Card name = {user.name} id={user.id} email={user.email}/>
        })}
    </div>);
}

export default Display;