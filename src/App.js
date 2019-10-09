import React, { Component } from 'react';
import ProductsAndSuppliers from './components/ProductsAndSuppliers.jsx';
import { Provider } from 'react-redux';
import dataStore from './redux/store';

export default class App extends Component {
   render() {
      return (
         <Provider store={dataStore}>
            <ProductsAndSuppliers />
         </Provider>
      );
   }
}
