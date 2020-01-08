import {
    GET_COMPANIES_REQUEST,
    GET_COMPANIES_SUCCESS,
    GET_COMPANIES_FAILURE,
} from './Constant';
import axios from 'axios';
import {urlGlobal} from './config';


export const getAllCompanies = () =>{
    return(dispatch) =>{
        dispatch({type:GET_COMPANIES_REQUEST});
        axios.get(`${urlGlobal}/api/admin/entreprise`,{headers: {'Content-Type':'application/json'}})
            .then(res =>{
                dispatch({type:GET_COMPANIES_SUCCESS,payload:res.data.Entreprises});
                //console.log(res);
        })
            .catch(error =>{
                dispatch({type:GET_COMPANIES_FAILURE,payload:error});

            });

    };
};