import { ACTIONS } from './actions';
import { AppStateType } from './context.types';
import { ActionType } from './reducer.types';

const reducer = (state: AppStateType, action: ActionType): AppStateType => {
  switch (action.type) {
    case ACTIONS.ADD_DIGIT: {
      if (state.currentOperand === '0' && action.payload === '0') {
        return { ...state };
      }
      if (state.currentOperand === '0' && action.payload === '.') {
        return { ...state, currentOperand: '0' + action.payload };
      }
      if (state.currentOperand === '0') {
        return { ...state, currentOperand: action.payload };
      }
      return { ...state, currentOperand: state.currentOperand + action.payload };
    }
    case ACTIONS.DELETE_DIGIT: {
      return { ...state };
    }
    case ACTIONS.CLEAR: {
      return { ...state };
    }
    case ACTIONS.CHOOSE_OPERATION: {
      return { ...state };
    }
    case ACTIONS.EVALUATE: {
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};

export default reducer;
