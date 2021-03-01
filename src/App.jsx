import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './css/App.css';

// Import pages

import HomePage from './components/home/HomePage';
import Navbar from './components/navbar/Navbar';
import About from './components/aboutMe/About';
import Tanzania from './components/projects/Tanzania';
import AliSannan from './components/projects/AliSannan';
import ObeidProject from './components/projects/ObeidProject';
import Villa from './components/projects/Villa';
import CopyCenter from './components/projects/CopyCenter';


function App() {
  return (
    <div className="App">
      <Router>
        
          <Navbar />
        
        
        <div className='body'>
          <Switch>
            <Route path='/' exact>
              <HomePage />
            </Route>
            <Route path='/About-me' exact>
              <About />
            </Route>
            <Route path='/Tanzania' exact>
              <Tanzania />
            </Route>
            <Route path='/Sannan' exact>
              <AliSannan />
            </Route>
            <Route path='/Obeid' exact>
              <ObeidProject />
            </Route>
            <Route path='/Villa' exact>
              <Villa />
            </Route>
            <Route path='/CopyCenter' exact>
              <CopyCenter />
            </Route>
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
