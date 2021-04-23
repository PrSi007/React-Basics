import './App.css';
import Navbar from './Components/navbar'
import Login from './Components/login'
import Footer from './Components/footer'
import Search from './Components/search'
import Cards from './Components/cards'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/home" component={App}> <Cards /> </Route>
          <Route path="/search" component={Search}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/footer" component={Footer}></Route>
        </Switch>
      </div>
    </Router >
  );
}

export default App;
