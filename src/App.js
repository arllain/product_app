import React, { Component } from 'react';
//import ProductsAndSuppliers from './components/ProductsAndSuppliers.jsx';
import { Provider } from 'react-redux';
import dataStore from './redux/store';
import { Selector } from './components/Selector';
import { ProductDisplay } from './components/product/ProductDisplay';
import { SupplierDisplay } from './components/supplier/SupplierDisplay';

export default class App extends Component {
   render() {
      return (
         <Provider store={dataStore}>
            <Selector>
               <ProductDisplay name="Products" />
               <SupplierDisplay name="Suppliers" />
            </Selector>
         </Provider>
      );
   }
}
