import React, { useState } from 'react'

const Userstable = ({user}) => {
    // const [users,setUsers] = useState()
    user = {
        id: 1,
        name:"chemseddine",
        email:"chams@gmail.com"
    }
  return (
    <div>

        {user.id}
        {user.name}
        {user.email}



    </div>
  )
}

export default Userstable