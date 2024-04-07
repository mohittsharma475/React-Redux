import { incrementBonus } from "../actions/accountActions";
import { useDispatch, useSelector } from "react-redux";

const Bonus = () => {
  const points = useSelector(state => state.bonus.points);
  const amount = useSelector(state => state.account.amount);
  const dispatch = useDispatch();
  
  return (
    <div style={{ border: "2px solid black", padding: "10px" }}>
      <h1>Bonus Component</h1>
      <h2>Total Points : {points}</h2>
      <h2>Total Amount: {amount}</h2>
      <button onClick={() => dispatch(incrementBonus())}>Increment points</button>
    </div>
  );
};

export default Bonus;
