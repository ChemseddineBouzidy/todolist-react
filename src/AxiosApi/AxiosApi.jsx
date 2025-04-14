import axios from 'axios';
import React from 'react'

const AxiosApi = () => {
   axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then(({ data }) => console.log(data))
  .catch((error) => console.log(error));
  return (
    <div>
      
    </div>
  )
}

export default AxiosApi
