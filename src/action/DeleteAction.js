import {
    DELETE_EMPLOYEE_REQUEST,
    DELETE_EMPLOYEE_SUCCESS,
    DELETE_EMPLOYEE_FAILURE,
    DELETE_DEPARTEMENT_REQUEST,
    DELETE_DEPARTEMENT_SUCCESS,
    DELETE_DEPARTEMENT_FAILURE
} from './Constant';
import axios from 'axios';
import {urlGlobal} from './config';

export const deleteEmployee = (Id,token)=>{
    console.log(token)
    return(dispatch)=>{
        dispatch({type: DELETE_EMPLOYEE_REQUEST});
        axios.post(`${urlGlobal}/api/employe/delete`,{Id},
        {headers: {'authorization':'Bearer '+token}})
        .then(res=>{
            dispatch({type:DELETE_EMPLOYEE_SUCCESS,payload:res.Id});
            console.log(res);
        })
        .catch(error=>{
            dispatch({type:DELETE_EMPLOYEE_FAILURE,payload:error});
        });
};};

export const deleteDepartement = (Id,token)=>{
    return(dispatch)=>{
        dispatch({type:DELETE_DEPARTEMENT_REQUEST});
        axios.post(`${urlGlobal}/api/departement/delete`,{Id},
        {headers: {'authorization':'Bearer '+token}})
        .then(res=>{
            dispatch({type:DELETE_DEPARTEMENT_SUCCESS,payload:res.data});
            console.log(res);
        })
        .catch(error=>{
            dispatch({type:DELETE_DEPARTEMENT_FAILURE,payload:error});
        });
};};