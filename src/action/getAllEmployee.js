import {
    GET_ALL_EMPLOYEE_REQUEST,
    GET_ALL_EMPLOYEE_SUCCESS,
    GET_ALL_EMPLOYEE_FAILED,
    GET_EMPLOYEE_REQUEST,
    GET_EMPLOYEE_SUCCESS,
    GET_EMPLOYEE_FAILED,
    REPORT_ACTIVITY_REQUEST,
    REPORT_ACTIVITY_SUCCESS,
    REPORT_ACTIVITY_FAILED
} from './Constant';
import axios from 'axios';
import {urlGlobal} from './config';

export const getAllEmployee = (token) =>{
    return(dispatch) =>{
        dispatch({type:GET_ALL_EMPLOYEE_REQUEST});
        axios.get(`${urlGlobal}/api/employe`,{headers: {'authorization':'Bearer '+token}})
            .then(res =>{
                dispatch({type:GET_ALL_EMPLOYEE_SUCCESS,payload:res.data.Employees});
                //console.log(res);
        })
            .catch(error =>{
                dispatch({type:GET_ALL_EMPLOYEE_FAILED,payload:error});

            });

    };
};
export const getEmployeId = (token,Id) =>{
    return(dispatch)=>{
        dispatch({type:GET_EMPLOYEE_REQUEST});
            axios.get(`${urlGlobal}/api/employe/${Id}`,{headers: {'authorization':'Bearer '+token}})
                .then(res =>{
                    dispatch({type:GET_EMPLOYEE_SUCCESS, payload:res.data});
                    //console.log(res)
                })
            .catch(err =>{
                dispatch({type:GET_EMPLOYEE_FAILED,payload:err});
                //console.log(err)
            })
    }
}


export const employeReport = (Id) =>{
    return(dispatch) =>{
        dispatch({type:REPORT_ACTIVITY_REQUEST});
        axios.get(`${urlGlobal}/api/report/${Id}`)
            .then(res =>{
                dispatch({type:REPORT_ACTIVITY_SUCCESS,payload:res.data});
                //console.log(res);
        })
            .catch(err =>{
                dispatch({type:REPORT_ACTIVITY_FAILED,payload:err});
                console.log(err)
            });

    };
};