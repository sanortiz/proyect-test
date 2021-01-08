import logo from './logo.svg';
import './App.css';
import Routing from './Containers/Routing';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      
      <main>
        <Routing />
      </main>

    </div>
  );
}

export default App;
