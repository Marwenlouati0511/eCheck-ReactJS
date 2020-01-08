import {EMPLOYEE_SELECTED} from './Constant';

export const EmployeeDetails = (employee) =>{
    return (dispatch) =>{
        dispatch({ type: EMPLOYEE_SELECTED, payload:employee });
        
    };
};