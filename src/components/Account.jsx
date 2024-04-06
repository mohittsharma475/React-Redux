import { useState } from "react";
import PropTypes from "prop-types";

const Account = ({ increment, incrementbyvalue, account, decrement }) => {
  const [value, setValue] = useState(0);

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
      <button onClick={() => incrementbyvalue(value)}>
        incrementbyvalue {value} +
      </button>
      <hr></hr>
    </div>
  );
};

Account.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  incrementbyvalue: PropTypes.func.isRequired,
  account: PropTypes.object.isRequired,
};

export default Account;
