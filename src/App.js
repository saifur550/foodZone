
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './pages/Header/Header';
import Banner from './pages/Banner/Banner';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header></Header>
     <Banner></Banner>
     <Switch>
        <Route>

        </Route>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
