import './App.css';
import Routing from './Containers/Routing';
import { HashRouter } from "react-router-dom";
import Menu from './Containers/Routing/menu';

function App() {
  return (
    <div className="App">
      <header>
      <div>
          <HashRouter>
              <Menu />
          </HashRouter>
        </div>
      </header>
      
      <main>
        <Routing />
      </main>
    </div>
  );
}

export default App;
