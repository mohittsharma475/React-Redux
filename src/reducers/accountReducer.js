// return state.amount = state.amount+1;  mutable
// return {amount : state.amount+1} immutable
import {
  actionName,
} from "../actions/accountActions";

export function accountReducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case actionName.increment:
      return { amount: state.amount + 1 };
    case actionName.decrement:
      return { amount: state.amount - 1 };
    case actionName.incrementByAmount:
      return { amount: state.amount + action.payload };
    case actionName.init:
      return { amount: action.payload };
    case actionName.getUserAccountFulfilled:
      return { amount: action.payload, pending: false };

    case actionName.getUserAccountPending:
      return { ...state, pending: true };

    case actionName.getUserAccountRejected:
      return { ...state, error: action.error, pending: false };

    default:
      return state;
  }
}
