import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Contact from './components/ContactSection';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
