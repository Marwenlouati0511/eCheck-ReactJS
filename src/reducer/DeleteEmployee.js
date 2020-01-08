import {
    DELETE_EMPLOYEE_REQUEST,
    DELETE_EMPLOYEE_SUCCESS,
    DELETE_EMPLOYEE_FAILURE,
} from '../action/Constant';

const INITIAL_STATE={
    deleting:'false',
    error:''
}
export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case DELETE_EMPLOYEE_REQUEST:
             return{
                 ...state,
                 deleting:true,
             };
         case DELETE_EMPLOYEE_SUCCESS :
             return{
                 ...state,
             };
         case DELETE_EMPLOYEE_FAILURE:
             return{
                 ...state,
                 error:action.error
             };
         default:
             return state;
 
    }
 };