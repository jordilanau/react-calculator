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

  const initialState: AppStateType = {
    previousOperand: '',
    currentOperand: '0',
    operation: '',
    addDigit: addDigit,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return <AppContext.Provider value={{ ...state, addDigit }}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
