import React from 'react'

function Car({...rest}) {
  return (
    <>

        <li>{rest.brand}</li>
        <li>{rest.price}</li>

   
    </>
  )
}

export default Car