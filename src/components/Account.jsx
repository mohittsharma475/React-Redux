import { useState } from "react";

const Account = () => {
  const [account, setAccount] = useState({ amount: 0 });
  const [value, setValue] = useState(0);

  function increment() {
    setAccount({ amount: account.amount + 1 });
  }
  function incrementbyvalue(value) {
    setAccount({ amount: account.amount + value });
  }
  function decrement() {
    setAccount({ amount: account.amount - 1 });
  }

  return (
    <div style={{ border: "2px solid black", padding: "10px" }}>
      <h2>Account Component</h2>
      <h3>Total Amount ${account.amount}</h3>
      <hr></hr>
      <button onClick={increment}>Increment +</button>
      <hr></hr>
      <button onClick={decrement}>decrement -</button>
      <hr></hr>
      <input
        type="number"
        onChange={(e) => {
        //   e.target.focus;
          setValue(+e.target.value);
        }}
      />
      <hr></hr>
      <button onClick={()=>incrementbyvalue(value)}>incrementbyvalue {value} +</button>
      <hr></hr>
    </div>
  );
};

export default Account;