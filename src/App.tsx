import { Calculator } from './components/Calculator/Calculator';
import { AppProvider } from './context/appContext';

function App() {
  return (
    <AppProvider>
      <div className='p-2'>
        <h2 className='font-bold text-lg'>React Calculator</h2>
        <Calculator />
      </div>
    </AppProvider>
  );
}

export default App;
