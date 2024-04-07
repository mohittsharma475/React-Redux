import Account from "./components/Account";
import Bonus from "./components/Bonus";
import {useState} from "react";
import PropTypes from "prop-types"


function App({store}) {
  const [account, setAccount] = useState({ amount: 0 });
  const [bonus, setBonus] = useState({ points: 0 });

  function incrementBonus() {
    setBonus({ points: bonus.points + 1 });
  }

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
    <>
      <div style={{ border: "2px solid black", padding: "10px" }}>
        <h1>App Component</h1>
        <h5>Total Amount: $ {store.getState().account.amount}</h5>
        <h5>Total bonus: {store.getState().bonus.points}</h5>
      </div>
      <Account
        account={account}
        increment={increment}
        decrement={decrement}
        incrementbyvalue={incrementbyvalue}
        store={store}
      />
      <Bonus store={store} incrementBonus={incrementBonus} bonus={bonus} />
    </>
  );
}

App.propTypes = {
  store:PropTypes.object.isRequired,
}

export default App;
