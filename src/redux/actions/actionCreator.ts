import axios from 'axios';
import { Dispatch } from 'redux';
import actionTypes from './actionTypes';

export default function loadProducts() {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await axios('url');
      dispatch({
        type: actionTypes.LOAD_MOVIES,
        products: data,
      });
    } catch (error) {
      dispatch({
        type: 'LOAD_MOVIES_ERROR',
      });
    }
  };
}
