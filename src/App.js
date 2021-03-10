import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import NoMatch from './NoMatch/NoMatch';
import TeamDetail from './components/TeamDetail/TeamDetail';
function App() {
  return (
    <div >
      
      <Router>
        <Switch>
          <Route path="/home">
             <Home/>
          </Route>
          <Route path="/team/:idTeam">
             <TeamDetail/>
          </Route>
          <Route exact path="/">
             <Home/>
          </Route>
          <Route path="*">
              <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
