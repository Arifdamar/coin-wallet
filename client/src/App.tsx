import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wallet from "./components/Wallet";

function App() {
  return (
    <Router>
      <div className="App flex flex-row  w-full h-screen overflow-auto">
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/wallet" component={Wallet} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
