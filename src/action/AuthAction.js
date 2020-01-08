import {
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGOUT,
  GET_CLIENT_REQUEST,
  GET_CLIENT_SUCCESS,
  GET_CLIENT_FAILED,
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAILED,
  GET_NEW_TOKEN
} from './Constant';
import axios from 'axios';
import { browserHistory } from 'react-router';
import {urlGlobal} from './config';

export const login = (email, password,callback) =>{
  return (dispatch) =>{
    
    dispatch({ type: LOGIN_REQUEST });
    axios.post(`${urlGlobal}/login`,`grant_type=password&username=${email}&password=${password}`)
      .then(res => {
        
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.access_token,});
        localStorage.setItem('user', res.data.access_token);
        browserHistory.push("/");
        console.log(res.data.access_token)
      })
      .catch(error => {
        dispatch({ type: LOGIN_FAILURE, payload: error}); 
        callback(error.error_description); 
      });
    };
  };

  export const updateToken= (user) => {
    return{
            type : GET_NEW_TOKEN,
            payload: user,
        };
};


  export const logoutUser = () => {
    localStorage.clear();  
    return  (dispatch) =>{
      dispatch({ type: LOGOUT });
      console.log(localStorage);
      browserHistory.push("/login");
    };
  };

  export const getClient = (token) =>{
    return (dispatch) =>{
      dispatch({ type: GET_CLIENT_REQUEST });
      axios.get(`${urlGlobal}/api/entreprise`,
            {headers: {'authorization':'Bearer '+token,
            'Content-Type': 'application/json'}})
        .then(res => { 
        dispatch({ type: GET_CLIENT_SUCCESS, payload: res.data.Entreprise[0]
          });
          //console.log(res.data.Entreprise)
        })
        .catch(error => {
          dispatch({ type: GET_CLIENT_FAILED, payload: error});  
        });
      };
  }

 export const editClient = (Id,token,Name,Email,CompanyName,Address,Phonenumber,Password)=>{
  return (dispatch) =>{
    dispatch({ type: EDIT_PROFILE_REQUEST });
    axios.post(`${urlGlobal}/api/entreprise/update`,
          {Name,Email,CompanyName,Address,Phonenumber,Password,Id},
          {headers: {'authorization':'Bearer '+token,
          'Content-Type': 'application/json'}})
      .then(res => { 
      dispatch({ type: EDIT_PROFILE_SUCCESS, payload: res.data
        });
        console.log(res.data)
      })
      .catch(error => {
        dispatch({ type: EDIT_PROFILE_FAILED, payload: error});  
      });
    };
 }