import {
    ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGIN_FAILURE
  } from './Constant';
import axios from 'axios';
import { browserHistory } from 'react-router';
import {urlGlobal} from './config';

export const loginAdmin = (Email, Password) =>{
    return (dispatch) =>{
      dispatch({ type: ADMIN_LOGIN_REQUEST });
      axios.post(`${urlGlobal}/api/admin/login`,{Email,Password})
        .then(res => {
          
          dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: res});
          browserHistory.push("/admin");
          //console.log(res)
        })
        .catch(error => {
          dispatch({ type: ADMIN_LOGIN_FAILURE, payload: error});  
        });
      };
    };
