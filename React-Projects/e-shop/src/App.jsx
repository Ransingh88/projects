import './App.css';
import { Header } from './components/Header'
import {ProductListing} from './components/ProductListing'
import {ProductDetails} from './components/ProductDetails'
import {Switch,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <ProductListing/>
        </Route>
        <Route path="/product/:id">
          <ProductDetails/>
        </Route>
        <Route>
          <h1>Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
