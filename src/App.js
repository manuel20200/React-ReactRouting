import { Route, Switch, Redirect } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to={'/welcome'}></Redirect>
          </Route>
          <Route path="/welcome">
            <Welcome></Welcome>
          </Route>
          <Route path="/products" exact>
            <Products></Products>
          </Route>
          <Route path="/products/:productId">
            <ProductDetail></ProductDetail>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/ => Component A
// our-domain.com/products => Component B
// our-domain.com/product-detail/<any value> => Component B