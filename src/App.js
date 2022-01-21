import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Home';
import Header from './partials/Header';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Header />
        <h1>
          <Home />
        </h1>
        <h1>
          <About />
        </h1>
      </header>
    </div>
  );
}

export default App;
