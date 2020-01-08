import {
    ADD_EMPLOYEE_REQUEST,
    ADD_EMPLOYEE_SUCCESS,
    ADD_EMPLOYEE_FAILURE,
    GET_INPUT_REQUEST,
    EDIT_EMPLOYEE_REQUEST,
    EDIT_EMPLOYEE_SUCCESS,
    EDIT_EMPLOYEE_FAILED
} from './Constant';
import { browserHistory } from 'react-router';
import axios from 'axios';
import {urlGlobal} from './config';

export const newEmployee = (Name,Address,RegistrationCode,hashcode,Email,DepartementId,token) => {
    return(dispatch)=>{
        dispatch({type:ADD_EMPLOYEE_REQUEST});
        axios.post(`${urlGlobal}/api/employe`,
        {Name,Address,RegistrationCode,hashcode,Email,DepartementId},
        {headers: {'authorization':'Bearer '+token,
                   'Content-Type': 'application/json'}})
            .then(res=>{
                dispatch({type:ADD_EMPLOYEE_SUCCESS,payload:res.data});
                browserHistory.push("/employees");
            })
            .catch(error=>{
                dispatch({type:ADD_EMPLOYEE_FAILURE,payload:error});
            });
    };};

export const updateCode = (code) => {
    return{
            type : GET_INPUT_REQUEST,
            payload: code,
        };
};

export const editEmploye =(Id,Name,Address,RegistrationCode,hashcode,Email,DepartementId,token)=>{
    return(dispatch) =>{
        dispatch({type:EDIT_EMPLOYEE_REQUEST});
            axios.post(`${urlGlobal}/api/employe/update`,
            {Name,Address,RegistrationCode,hashcode,Email,DepartementId,Id},
            {headers: {'authorization':'Bearer '+token,
                   'Content-Type': 'application/json'}})
        .then(res=>{
            dispatch({type:EDIT_EMPLOYEE_SUCCESS,payload:res.data});
            browserHistory.push("/employees");
            //console.log(res.data)
        })
        .catch(err=>{
            dispatch({type: EDIT_EMPLOYEE_FAILED,payload:err});
            console.log(err);
        });
        
    };
};