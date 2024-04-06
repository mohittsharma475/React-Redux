import Account from "./components/Account";
import Bonus from "./components/Bonus";
import {useState} from "react";

function App() {
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
        <h5>Total Amount: $ {account.amount}</h5>
        <h5>Total bonus: {bonus.points}</h5>
      </div>
      <Account
        account={account}
        increment={increment}
        decrement={decrement}
        incrementbyvalue={incrementbyvalue}
        bonus={bonus}
      />
      <Bonus incrementBonus={incrementBonus} bonus={bonus} account={account} />
    </>
  );
}

export default App;
