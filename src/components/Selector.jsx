import React, { Component } from 'react';
import {
   BrowserRouter as Router,
   Link,
   Route,
   Switch,
   Redirect
} from 'react-router-dom';
import { ProductDisplay } from './product/ProductDisplay';
import { SupplierDisplay } from './supplier/SupplierDisplay';

export class Selector extends Component {
   render() {
      return (
         <Router>
            <div className="container-fluid">
               <div className="row">
                  <div className="col-2">
                     <div>
                        <Link className="m-2 btn btn-block btn-primary" to="/">
                           Default URL
                        </Link>
                     </div>
                     <div>
                        <Link
                           className="m-2 btn btn-block btn-primary"
                           to="/products"
                        >
                           Products
                        </Link>
                     </div>
                     <div>
                        <Link
                           className="m-2 btn btn-block btn-primary"
                           to="/suppliers"
                        >
                           Suppliers
                        </Link>
                     </div>
                     <div>
                        <Link
                           className="m-2 btn btn-block btn-primary"
                           to="/old/data"
                        >
                           Old Link
                        </Link>
                     </div>
                  </div>
                  <div className="col">
                     <Switch>
                        <Route path="/products" component={ProductDisplay} />
                        <Route path="/suppliers" component={SupplierDisplay} />
                        <Redirect from="/old/data" to="/suppliers" />
                        <Redirect to="/products" />
                     </Switch>
                  </div>
               </div>
            </div>
         </Router>
      );
   }
}
