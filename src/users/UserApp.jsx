import React, { createContext, useState } from "react";
import UsersTable from "./UsersTable";
import UserAdd from "./UserAdd";
import UsersLayout from "./UsersLayout";
export const UsersContext = createContext({
  users:[],
  lastId:0,
  addUser:() => null,
  updateUser:() => null,
  deleteUser:() => null,


})
const UserApp = () => {
  const [users, setUsers] = useState([]);
  const [lastId, setLastId] = useState(0);
  const addUser = (data) => {
    setUsers(preState => [...preState,data.payload])
    setLastId(preState => preState+1)
  }
  const updateUser = (data) => {
    const {id,...rest} = data.payload
    setUsers(prevState => 
      prevState.map(user =>{
        if(user.id === id){
          return {id: user.id,...rest}
        }
          return user

        
      })
    )
    window.history.back()
  }
  const deleteUser = (data) => {
    setUsers(prevState => prevState.filter(user  => user.id !== parseInt(data.payload.id)))
    window.history.back()
}

  return (
    <UsersContext.Provider value={{
      users:users,
      lastId:lastId,
      addUser:addUser,
      updateUser:updateUser,
      deleteUser:deleteUser 
    }}>
    <UsersLayout />
    </UsersContext.Provider>
  );
};

export default UserApp;
