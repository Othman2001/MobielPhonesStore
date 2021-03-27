import './App.css';
import MainScreen from './pages/MainScreen'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
      <Switch path="/">
      <MainScreen/>

      </Switch>
    </div>
      </Router>

 
  );
}

export default App;
