import {
    GET_ALL_DEPARTEMENT_REQUEST,
    GET_ALL_DEPARTEMENT_SUCCESS,
    GET_ALL_DEPARTEMENT_FAILURE,
    DEPARTEMENT_SELECTED
} from './Constant';
import axios from 'axios';
import {urlGlobal} from './config';

export const getAllDepartement = (token) =>{
    return(dispatch)=>{
        dispatch({type:GET_ALL_DEPARTEMENT_REQUEST});
        axios.get(`${urlGlobal}/api/departement`,{headers: {'authorization':'Bearer '+token}})
        .then(res =>{
            dispatch({type:GET_ALL_DEPARTEMENT_SUCCESS,payload:res.data.departements});
    })
        .catch(error =>{
            dispatch({type:GET_ALL_DEPARTEMENT_FAILURE,payload:error});

        });};};
        

export const DepartementDetails = (departement) =>{
    return (dispatch) =>{
        dispatch({ type: DEPARTEMENT_SELECTED, payload:departement });
        
    };
};