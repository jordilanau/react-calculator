import { PropsWithChildren, createContext, useReducer } from 'react';
import { ACTIONS } from './actions';
import { AppStateType } from './context.types';
import reducer from './reducer';

const AppContext = createContext<AppStateType>({
  previousOperand: '',
  currentOperand: '',
  operation: '',
} as AppStateType);

const AppProvider = ({ children }: PropsWithChildren) => {
  const addDigit = (digit: string) => {
    dispatch({ type: ACTIONS.ADD_DIGIT, payload: digit });
  };

  const chooseOperation = (operation: string) => {
    dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: operation });
  };

  const clear = () => {
    dispatch({ type: ACTIONS.CLEAR });
  };

  const initialState: AppStateType = {
    previousOperand: '',
    currentOperand: '0',
    operation: '',
    addDigit: addDigit,
    chooseOperation: chooseOperation,
    clear,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return <AppContext.Provider value={{ ...state, addDigit, chooseOperation, clear }}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
