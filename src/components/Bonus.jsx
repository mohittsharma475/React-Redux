import PropTypes from "prop-types";
import { incrementBonus } from "../actions/accountActions";

const Bonus = ({ store }) => {
  return (
    <div style={{ border: "2px solid black", padding: "10px" }}>
      <h1>Bonus Component</h1>
      <h2>Total Points : {store.getState().bonus.points}</h2>
      <button onClick={store.dispatch(incrementBonus())}>Increment points {store.getState().bonus.points}</button>
    </div>
  );
};

Bonus.propTypes = {
  store:PropTypes.object.isRequired
};

export default Bonus;
