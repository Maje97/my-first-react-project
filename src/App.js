import logo from './logo.svg';
import './App.css';
import TraditionalGreeting from "./components/Greetings";
import ArrowGreeting from "./components/Greetings";
import UserProfile from "./components/UserProfile";
import CardContainer from './components/card';
import Counter from './components/counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <TraditionalGreeting name="Alexandra" />
      <ArrowGreeting name="Nessie" />
      <UserProfile name="Nexus" age={12} location="Knivsta" />
      <CardContainer>
        <p>This is a child</p>
      </CardContainer>
      <Counter />
    </div>
  );
}

export default App;
