import React, { useState } from "react";
import { useForm } from "./useForm";

const App = () => {
  //const [count, setCount] = useState(()=> expensiveInitialState())
  //const [count, setCount] = useState(10)
  //const [{count, count2}, setCount] = useState({count:10, count2: 20})
  const [count, setCount] = useState(10);
  const [count2, setCount2] = useState(20);
  const [values, handleChange] = useForm({ email: "", password: "" });

  //<button onClick={()=> setCount(count + 1)}>+</button>
  //<button onClick={()=> setCount(currentState => ({...currentState, count: currentState.count +1}))}>+</button>
  return (
    <>
      <p>Count 1: {count}</p>
      <p>Count 2: {count2}</p>
      <button onClick={() => setCount(c => c + 1)}>Count +</button>
      <button onClick={() => setCount2(c => c + 2)}>Count2 +</button>
      <p>Email: {values.email}</p>
      <p>Password: {values.password}</p>
      <input name="email" value={values.email} onChange={handleChange} />
      <input
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
      />
    </>
  );
};

export default App;
