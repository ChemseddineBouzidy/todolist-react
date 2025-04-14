import React, { createContext, useState } from "react";
import UsersTable from "./UsersTable";
import UserAdd from "./UserAdd";
import UsersLayout from "./UsersLayout";
export const UsersContext = createContext({
  users:[],
  lastId:0,
  addUser:() => null
})
const UserApp = () => {
  const [users, setUsers] = useState([]);
  const [lastId, setLastId] = useState(0);
  const addUser = (data) => {
    alert('ok')
    setUsers(preState => [...preState,data.payload])
    setLastId(preState => preState+1)

    // setUsers(preState => [...preState,{
    //   fullname:data.payload.fullname,
    //   country:data.payload.country,

    // }])

    console.table(data.payload)
  }
  return (
    <UsersContext.Provider value={{
      users:users,
      lastId:lastId,
      addUser:addUser
    }}>
    <UsersLayout />
    </UsersContext.Provider>
  );
};

export default UserApp;
