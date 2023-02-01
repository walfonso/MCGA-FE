import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';
//

// Components - Layout
import Header from './shared/Header';
import Sidebar from './shared/Sidebar';
import Dashboard from './components/Dashboard';
import Footer from './shared/Footer';
// Components - Clients branch
import Clients from './components/Clients';
import NewClient from './components/Clients/NewClient';
import EditClient from './components/Clients/EditClient';
// Components - Products branch
import Products from './components/Products';
import NewProduct from './components/Products/NewProduct';
import EditProduct from './components/Products/EditProduct';
// Components - Suppliers branch
import Suppliers from './components/Suppliers';
import NewSupplier from './components/Suppliers/NewSupplier';
import EditSupplier from './components/Suppliers/EditSupplier';
//

function App() {
  return (
    <Router>
      <Header />
      <Provider store={store}>
        <div className='flex'>
          <Sidebar />
          <div className='mainOptions'>
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route exact path='/clients' component={Clients} />
              <Route exact path='/clients/new' component={NewClient} />
              <Route exact path='/clients/edit/:id' component={EditClient} />
              <Route exact path='/products' component={Products} />
              <Route exact path='/products/new' component={NewProduct} />
              <Route exact path='/products/edit/:id' component={EditProduct} />
              <Route exact path='/suppliers' component={Suppliers} />
              <Route exact path='/suppliers/new' component={NewSupplier} />
              <Route exact path='/suppliers/edit/:id' component={EditSupplier} />
            </Switch>
          </div>
        </div>
      </Provider>
      <Footer />
    </Router>
  );
}

export default App;
