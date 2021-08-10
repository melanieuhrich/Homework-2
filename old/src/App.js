import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/contact' component={ContactPage} /> 
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
