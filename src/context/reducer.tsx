import { ACTIONS } from './actions';
import { AppStateType } from './context.types';
import { ActionType } from './reducer.types';

const reducer = (state: AppStateType, action: ActionType): AppStateType => {
  switch (action.type) {
    case ACTIONS.ADD_DIGIT: {
      if (state.currentOperand === '0' && action.payload === '0') {
        return { ...state };
      }
      if (state.currentOperand.includes('.') && action.payload === '.') {
        return { ...state };
      }
      if (state.currentOperand === '0' && action.payload === '.') {
        return { ...state, currentOperand: '0' + action.payload };
      }
      if (state.currentOperand === '0') {
        return { ...state, currentOperand: '' + action.payload };
      }
      return { ...state, currentOperand: state.currentOperand + action.payload };
    }
    case ACTIONS.DELETE_DIGIT: {
      if (state.currentOperand.length > 1) {
        return { ...state, currentOperand: state.currentOperand.slice(0, -1) };
      }
      return { ...state, currentOperand: '0' };
    }
    case ACTIONS.CLEAR: {
      return { ...state, previousOperand: '', currentOperand: '0', operation: '' };
    }
    case ACTIONS.CHOOSE_OPERATION: {
      if (!state.previousOperand) {
        return {
          ...state,
          operation: action.payload || '',
          previousOperand: state.currentOperand,
          currentOperand: '0',
        };
      }
      return {
        ...state,
        previousOperand: evaluate(state),
        currentOperand: '0',
        operation: action.payload || '',
      };
    }
    case ACTIONS.EVALUATE: {
      if (!state.currentOperand || !state.previousOperand || !state.operation) {
        return { ...state };
      }
      return {
        ...state,
        previousOperand: '',
        operation: '',
        currentOperand: evaluate(state),
      };
    }
    default: {
      return { ...state };
    }
  }
};

function evaluate({
  currentOperand,
  previousOperand,
  operation,
}: Pick<AppStateType, 'previousOperand' | 'currentOperand' | 'operation'>) {
  const previous = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);

  switch (operation) {
    case '+': {
      return (previous + current).toString();
    }
    case '-': {
      return (previous - current).toString();
    }
    case '*': {
      return (previous * current).toString();
    }
    case '/': {
      return (previous / current).toString();
    }
    default: {
      return '';
    }
  }
}

export default reducer;
