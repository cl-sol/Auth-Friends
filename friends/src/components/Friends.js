import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const Friends = () => {
    const [friendsList, setFriendsList] = useState([]);
    
    return (
        <h1>Friends</h1>
        <h3>Add Friend</h3>
        <form>
            <label htmlFor="name">
                Name
            </label>
        </form>
        )

    {friendsList.map((friend) => {
        return (
            <div className="friends">
                <h3>{friend.name}</h3>
                <h3>{friend.age}</h3>
                <h3>{friend.email}</h3>
            </div>
        )
    })}
}
