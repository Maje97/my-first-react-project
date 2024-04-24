import logo from './logo.svg';
import './App.css';
import TraditionalGreeting from "./components/Greetings";
import ArrowGreeting from "./components/Greetings";
import UserProfile from "./components/UserProfile";
import CardContainer from './components/card';
import Counter from './components/counter';
import MainHeader from './components/MainHeader';
import MainNav from './components/MainNav';

function App() {
  return (
    <div className="App">
      <header class="bg-cyan-500 container mx-auto min-w-full py-4">
        <MainHeader title="My first react project" description="This is my first react project" />
        <MainNav titles={["Hem", "Sida2", "Sida3"]} />
      </header>
      <main>
        <TraditionalGreeting name="Alexandra" />
        <ArrowGreeting name="Nessie" />
        <UserProfile name="Nexus" age={12} location="Knivsta" />
        <CardContainer>
          <p>This is a child</p>
        </CardContainer>
        <Counter />
      </main>
      <footer class="bg-cyan-500 fixed bottom-0 min-w-full py-4">
        <p>Hej</p>
      </footer>
    </div>
  );
}

export default App;
