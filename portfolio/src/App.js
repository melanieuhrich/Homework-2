import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Work from './pages/Work';
import Resume from './pages/Resume';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>
      <div className='image'>
        <header className='App-header'>
          <Router>
            <Navbar />
            <Switch>
            <Route exact path='/' component={Home} />
              <Route exact path='/about' component={AboutMe} />
              <Route exact path='/work' component={Work} />
              <Route exact path='/resume' component={Resume} />
            </Switch>
          </Router>
        </header>
      </div>
    </div>
  );
}

export default App;
