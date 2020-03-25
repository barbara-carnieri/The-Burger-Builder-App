import * as actionTypes from './actionTypes';
// import axios from '../../axios-orders';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = ( authData ) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    };
};

export const authFail = ( error ) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
}

export const auth = ( email, password ) => {
  return dispatch => {
      dispatch( authStart() );
      // axios.post( '/orders.json', orderData )
      //     .then( response => {
      //         console.log( response.data );
      //         dispatch( purchaseBurgerSuccess( response.data.name, orderData ) );
      //     } )
      //     .catch( error => {
      //         dispatch( purchaseBurgerFail( error ) );
      //     } );
  };
};
