import './App.css';

// components
import Exhibit from './components/Exhibit';

function App() {
  return (
    <div className="App">
      <header className="banner">
        <h1>Sextant</h1>
      </header>

      <div className="content">
        <Exhibit />
      </div>
    </div>
  );
}

export default App;
