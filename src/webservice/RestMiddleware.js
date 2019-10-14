import { STORE, UPDATE, DELETE } from '../redux/modelActionTypes';
import { RestDataSource } from './RestDataSource';
import { PRODUCTS, SUPPLIERS } from '../redux/dataTypes';

export const GET_DATA = 'rest_get_data';

export const getData = dataType => {
   return {
      type: GET_DATA,
      dataType: dataType
   };
};

export const createRestMiddleware = (productURL, supplierURL) => {
   const dataSources = {
      [PRODUCTS]: new RestDataSource(productURL, () => {}),
      [SUPPLIERS]: new RestDataSource(supplierURL, () => {})
   };

   return ({ dispatch, getState }) => next => action => {
      switch (action.type) {
         case GET_DATA:
            if (getState().modelData[action.dataType].length === 0) {
               dataSources[action.dataType].GetData(data =>
                  data.forEach(item =>
                     next({
                        type: STORE,
                        dataType: action.dataType,
                        payload: item
                     })
                  )
               );
            }
            break;
         case STORE:
            action.payload.id = null;
            dataSources[action.dataType].Store(action.payload, data =>
               next({ ...action, payload: data })
            );
            break;
         case UPDATE:
            dataSources[action.dataType].Update(action.payload, data =>
               next({ ...action, payload: data })
            );
            break;
         case DELETE:
            dataSources[action.dataType].Delete({ id: action.payload }, () =>
               next(action)
            );
            break;
         default:
            next(action);
      }
   };
};
