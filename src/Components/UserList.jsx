import React from "react";

const UserList = ({ userList,selectUser,deleteUser }) => {
    return (
        <div className="user-container-parent">
            {userList.map((user) => (
                <li className="user-container" key={user.id}>
                    <section className="user-data-contanier">
                        <h3>
                            <b>Name:</b> {user.first_name}
                        </h3>
                        <h3>    
                            <b>Last Name:</b> {user.last_name}
                        </h3>
                        <h3>
                            <b>Email:</b> {user.email}
                        </h3>
                        <h3>
                            <b>PassWord:</b> {user.password}
                        </h3>
                        <h3>
                            <b>Birthday:</b> {user.birthday}
                        </h3>
                    </section>
                    <section className="button-container">
                        <button onClick={()=>selectUser(user)}>Edit</button> <button onClick={()=>deleteUser(user.id)} >Delete</button>
                    </section>
                </li>
            ))}
        </div>
    );
};

export default UserList;
