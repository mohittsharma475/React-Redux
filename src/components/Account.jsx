import { useState } from "react";
import PropTypes from "prop-types";
import { decrement, increment, incrementByAmount } from "../actions/accountActions";

const Account = ({ store}) => {
  const [value, setValue] = useState(0);

  return (
    <div style={{ border: "2px solid black", padding: "10px" }}>
      <h2>Account Component</h2>
      <h3>Total Amount ${store.getState().account.amount}</h3>
      <hr></hr>
      <button onClick={store.dispatch(increment())}>Increment +</button>
      <hr></hr>
      <button onClick={store.dispatch(decrement())}>decrement -</button>
      <hr></hr>
      <input
        type="number"
        onChange={(e) => {
          //   e.target.focus;
          setValue(+e.target.value);
        }}
      />
      <hr></hr>
      <button onClick={() => store.dispatch(incrementByAmount(value))}>
        incrementbyvalue {value} +
      </button>
      <hr></hr>
    </div>
  );
};

Account.propTypes = {
  
  store:PropTypes.object.isRequired
};

export default Account;
