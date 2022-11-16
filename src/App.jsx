import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import UserList from "./Components/UserList";
import axios from "axios";
import UserForm from "./Components/UserForm";
function App() {
  const [userList, setUserList] = useState([]);
  const [userSelected, setUserSelected] = useState(null);

  useEffect(() => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUserList(res.data));
  }, []);
  console.log(userList);

const getUser=()=>{
  axios
  .get("https://users-crud1.herokuapp.com/users/")
  .then((res) => setUserList(res.data));
}

const addUser=(data)=>{
  axios.post("https://users-crud1.herokuapp.com/users/",data).
then(()=>getUser())
.catch(error => console.log(error.response.data))
}

const updateUser=(id)=>{
axios.put(`https://users-crud1.herokuapp.com/users/${id}/`,data)
.then(()=>getUser())
.catch(error => console.log(error.response.data))
}

const deleteUser=(id)=>{
  axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`,userList)
  .then(()=>getUser())
  .catch(error => console.log(error.response.data))
  }

const selectUser= (user)=>{
 setUserSelected(user)


}

  return (
    <div className="App">
    <UserForm
    addUser = {addUser}
    userSelected={userSelected}
    updateUser={updateUser}
    />
      <UserList 
      userList={userList} 
      selectUser={selectUser}
      deleteUser={deleteUser}/>
    </div>
  );
}

export default App;
