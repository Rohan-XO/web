import './App.css';
import Home from './home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import References from './references'
import About from './About'
import Button from './button'
import Footer from './footer'
import Work from './work'
import Work1 from './work1'
import Work2 from './work2'
import Work3 from './work3'
function App() {
  return (
    <Router>
     <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} /> 
          <Route path="/references" component={References}/>
          <Route path="/home" component={Home}/>
          <Route path="/work" component={Work}/>
          <Route path="/work1" component={Work1}/>
          <Route path="/work2" component={Work2}/>
          <Route path="/work3" component={Work3}/>
        </Switch>
    </div>
  <Footer/>
  </Router>
  );
}

export default App;
