import React, { useCallback, useMemo } from "react";

const expensiveCalcul = (value) => {
  for (let i = 0; i <= 1310456450; i++) {
    value++;
  }
  return value;
};

function Memo() {
  const n = 122334;

  

const calculate = useMemo(() => {
    return expensiveCalcul(n)
},[n])



  //memorized value

  return (
    <>
 
      <h1> Value : {calculate}</h1>
      </>
  );
}

export default Memo;
