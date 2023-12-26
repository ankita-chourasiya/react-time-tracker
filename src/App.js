import logo from './logo.svg';
import './App.css';
// import ClassTimeTracker from './components/funbased/TimeTracker';
// import FunTimeTracker from './components/classbased/TimeTracker';
import HooksDemo from './components/funbased/HooksDemo';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ClassTimeTracker /> */}
        {/* <FunTimeTracker /> */}
        <HooksDemo />
      </header>
    </div>
  );
}

export default App;
