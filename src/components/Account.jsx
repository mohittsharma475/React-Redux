import { useState } from "react";
import { decrement, getUser, increment, incrementByAmount } from "../actions/accountActions";
import { useDispatch, useSelector } from "react-redux";

const Account = () => {
  const [value, setValue] = useState(0);
  const amount = useSelector(state => state.account.amount);
  const points = useSelector(state => state.bonus.points);
  const dispatch = useDispatch();

  return (
    <div style={{ border: "2px solid black", padding: "10px" }}>
      <h2>Account Component</h2>
      <h3>Total Amount ${amount}</h3>
      <h3>Total points ${points}</h3>
      <hr />
      <button onClick={() => dispatch(increment())}>Increment +</button>
      <hr />
      <button onClick={() => dispatch(decrement())}>Decrement -</button>
      <hr />
      <input
        type="number"
        onChange={(e) => setValue(+e.target.value)}
      />
      <hr />
      <button onClick={() => dispatch(incrementByAmount(value))}>
        Increment by {value}
      </button>
      <button onClick={()=>dispatch(getUser)}>Intialse Account</button>
      <hr />
    </div>
  );
};

export default Account;
