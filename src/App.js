import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateNewProfile from './pages/CreateNewProfile';
import ProfilePage from './pages/ProfilePage';
import MainPage from './pages/MainPage';
import SignUp from './pages/SignUp';

function App() {

  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path="/SignUp" component={SignUp}></Route>
          <Route exact path="/CreateNewProfile" component={CreateNewProfile}></Route>
          <Route exact path="/ProfilePage" component={ProfilePage}></Route>
          <Route exact path="/" component={MainPage}></Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
