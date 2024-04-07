import { useSelector } from "react-redux";
import Account from "./components/Account";
import Bonus from "./components/Bonus";

function App() {
  const amount = useSelector((state) => state.account.amount);
  const account = useSelector((state) => state.account);
  const points = useSelector((state) => state.bonus.points);

  return (
    <>
      <div style={{ border: "2px solid black", padding: "10px" }}>
        <h1>App Component</h1>
        {account.pending ? (
          <p>Loading..........</p>
        ) : account.error ? (
          <p>{account.error}</p>
        ) : (
          <h5>Current Amount: $ {amount}</h5>
        )}
        <h5>Current bonus: {points}</h5>
      </div>
      <Account />
      <Bonus />
    </>
  );
}

export default App;
