import { actionName} from "../actions/accountActions";

export function bonusReducer(state = { points: 0 }, action) {
  switch (action.type) {
    case actionName.incrementByAmount:
      if (action.payload >= 100) {
        return { points: state.points + 1 };
      }
      break;
    case actionName.incrementBonus:
      return { points: state.points + 1 };
    default:
      return state;
  }
}
