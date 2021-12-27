import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Header from './partials/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Header />
        <h1>
          <Home />
        </h1>
      </header>
    </div>
  );
}

export default App;
