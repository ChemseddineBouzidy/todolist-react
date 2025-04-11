import React, { useCallback } from 'react'

function Mathcalcule() {
    const x = 12
    const y = 13

    // const complexeCalculation = () => {
    
    // }

    
    //memorized function
    const handleclick = useCallback(() =>{
        let result = (x+y)
        console.log(result)
        return result
    },[x,y])
    
  return (
    <>
        
<button type="button" onClick={handleclick} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>

       {/* { complexeCalculation()}= */}
        
    </>
  )
}

export default Mathcalcule