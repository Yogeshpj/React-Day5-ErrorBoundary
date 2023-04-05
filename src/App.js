import './App.css';
import  Day5 from './Day5';
import Errorboundary from './Errorboundary';

function App() {
  return (
    <div className="App">
      <Errorboundary>
        <Day5 a={["Brock Lesnar","John Cena","Roman Reings","The Rock"]}/>
      </Errorboundary>
    </div>
  );
}

export default App;