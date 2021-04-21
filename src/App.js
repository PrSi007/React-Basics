import './App.css';
import Navbar from './Components/navbar'
import Login from './Components/login'
import Footer from './Components/footer'
import Search from './Components/search'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/app" component={App}></Route>
          <Route path="/search" component={Search}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/footer" component={Footer}></Route>
        </Switch>
      </div>
    </Router >
  );
}

export default App;
