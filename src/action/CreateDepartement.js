import {
    ADD_DEAPARTEMENT_REQUEST,
    ADD_DEAPARTEMENT_SUCCESS,
    ADD_DEAPARTEMENT_FAILURE,
    EDIT_DEAPARTEMENT_REQUEST,
    EDIT_DEAPARTEMENT_SUCCESS,
    EDIT_DEAPARTEMENT_FAILURE
} from './Constant';
import axios from'axios';
import { browserHistory } from 'react-router';
import {urlGlobal} from './config';

export  const newDepartement = (Name,Description,token)=>{
    return(dispatch)=>{
        dispatch({type:ADD_DEAPARTEMENT_REQUEST});
            axios.post(`${urlGlobal}/api/departement`,{Name,Description},
            {headers: {'authorization':'Bearer '+token,
            'Content-Type': 'application/json'}})
            .then(res=>{
                dispatch({type:ADD_DEAPARTEMENT_SUCCESS,payload:res.data});
                browserHistory.push("/departements");
                console.log(res);
            })
            .catch(error=>{
                dispatch({type:ADD_DEAPARTEMENT_FAILURE,payload:error});
            });
    };};

export const editDepartement = (Id,Name,Description,token) =>{
    return(dispatch)=>{
        dispatch({type:EDIT_DEAPARTEMENT_REQUEST});
            axios.post(`${urlGlobal}/api/departement/update`,{Id,Name,Description},
            {headers: {'authorization':'Bearer '+token,
            'Content-Type': 'application/json'}})
            .then(res=>{
                dispatch({type:EDIT_DEAPARTEMENT_SUCCESS,payload:res.data});
                browserHistory.push("/depatements");
                //console.log(res);
            })
            .catch(error=>{
                dispatch({type:EDIT_DEAPARTEMENT_FAILURE,payload:error});
                //console.log(console.error);
                
            });
    };};
