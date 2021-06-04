
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from  './components/Home'
import Navbar from  './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Login from  './components/Login'
import Signup from './components/Signup'
import Logout from './components/Logout'
import  Access  from "./components/Access";
import Landingpage from './components/Landingpage'
import Error404 from './components/Error404'
import {Switch, Route} from 'react-router-dom'
// importing css
import '../src/App.css'

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contactus" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/tryfree" component={Landingpage} />
        <Route exact path="/landingpage" component={Landingpage}/>
        <Route exact path="/logout" component={Logout}/>
        <Route  component={Error404}/>
    </Switch>
   
    </>

  );
}

export default App;
