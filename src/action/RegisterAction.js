import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from './Constant';
import axios from'axios';
import {urlGlobal} from './config';

export  const registration = (CompanyName,Email,Password,Address,Phonenumber)=>{
    return(dispatch)=>{
        dispatch({type:REGISTER_REQUEST});
            axios.post(`${urlGlobal}/api/entreprise/`,{CompanyName,Email,Password,Address,Phonenumber})
            .then(res=>{
                dispatch({type:REGISTER_SUCCESS,payload:res.data});
                
                console.log(res);
            })
            .catch(error=>{
                dispatch({type:REGISTER_FAILURE,payload:error});
            });
    };};