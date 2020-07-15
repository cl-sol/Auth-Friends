import React, { useState, useEffect } from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";

const Friends = () => {
    const [friendsList, setFriendsList] = useState([]);

    const [newFriend, setNewFriend] = useState ({
        name: "",
        age: "",
        email: ""
    });

    useEffect(() => {
        axiosWithAuth()
            .get("/friends")
            .then((res) => {
                setFriendsList(res.data);
            })
            .catch(err => console.log({err: err.message}));
    }, []);

    function handleChanges(e) {
        setNewFriend({[e.target.name]: e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        axiosWithAuth()
            .post("/friends", newFriend)
            .then((res) => {
                setNewFriend([...friendsList, res.data]);
            })
            .catch(err => console.log(err));
    }
    
    return (
        <>
            <h1>Friends</h1>
            <h3>Add Friend</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    placeholder="name"
                    value={newFriend.name}
                    onChange={handleChanges}
                />
                <label htmlFor="age">
                    Age
                </label>
                <input
                    type="text"
                    name="age"
                    placeholder="age"
                    value={newFriend.age}
                    onChange={handleChanges}
                />
                <label htmlFor="email">
                    Email
                </label>
                <input
                    type="text"
                    name="email"
                    placeholder="email"
                    value={newFriend.email}
                    onChange={handleChanges}
                />
                <button>Add Friend</button>
            </form>

            {friendsList.map((friend) => {
                return (
                    <div className="friends">
                        <h3>{friend.name}</h3>
                        <h3>{friend.age}</h3>
                        <h3>{friend.email}</h3>
                    </div>
                );
            })}
        </>
    )
}

export default Friends;
