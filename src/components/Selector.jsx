import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { ProductDisplay } from './product/ProductDisplay';
import { SupplierDisplay } from './supplier/SupplierDisplay';
import { IsolatedTable } from './isolatedData/IsolatedTable';
import { IsolatedEditor } from './isolatedData/IsolatedEditor';
import { RequestError } from '../webservice/RequestError';

export class Selector extends Component {
   render() {
      return (
         <Router>
            <div className="container-fluid">
               <div className="row">
                  <div className="col-2">
                     <div>
                        <Link
                           className="m-2 btn btn-block btn-primary"
                           to="/isolated"
                        >
                           Isolated Data
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
                  </div>
                  <div className="col">
                     <Switch>
                        <Route
                           path="/isolated"
                           component={IsolatedTable}
                           exact={true}
                        />
                        <Route
                           path="/isolated/:mode/:id?"
                           component={IsolatedEditor}
                        />
                        <Route
                           path="/error/:message"
                           component={RequestError}
                        />
                        <Route path="/products" component={ProductDisplay} />
                        <Route path="/suppliers" component={SupplierDisplay} />
                     </Switch>
                  </div>
               </div>
            </div>
         </Router>
      );
   }
}
