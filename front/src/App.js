import './App.css';
import Home from './components/Home';
import 'bulma/css/bulma.min.css';
import { Switch, Route } from 'react-router-dom';
import Signup from './components/auth/Signup';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
