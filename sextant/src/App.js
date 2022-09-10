import './App.css';

// components
import Exhibit from './components/Exhibit';
import IPCollector from './components/IPCollector';

function App() {
  return (
    <div className="App">
      <header className="banner">
        <h1>Sextant</h1>
      </header>

      <div className="content">
        <Exhibit title="IPv4 Address">
          <IPCollector isIPv4={true} />
        </Exhibit>
        <Exhibit title="IPv6 Address">
          <IPCollector isIPv4={false} />
        </Exhibit>
      </div>
    </div>
  );
}

export default App;
