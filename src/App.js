
import MainScreen from './pages/MainScreen'
import AddMobiel from './pages/AddMobiel'
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
           
      <Switch >
        <Route path="/add">
          <AddMobiel/>
        </Route>
        <Route path="/">
        <MainScreen/>
        </Route>
      </Switch>
 
    </div>
      </Router>

 
  );
}

export default App;
