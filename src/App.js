import logo from './logo.svg';
import './App.css';
import ClassTimeTracker from './components/funbased/TimeTracker';
import FunTimeTracker from './components/classbased/TimeTracker';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClassTimeTracker />
        <FunTimeTracker />
      </header>
    </div>
  );
}

export default App;
