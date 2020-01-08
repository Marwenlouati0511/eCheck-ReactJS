import {
    EDIT_EMPLOYEE_FAILED,
    EDIT_EMPLOYEE_SUCCESS,
    EDIT_EMPLOYEE_REQUEST
} from '../action/Constant';

const INITIAL_STATE={
    updationg:false,
    error:'',

};
export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case EDIT_EMPLOYEE_REQUEST:
             return{
                 ...state,
                 updationg:true,
             };
         case EDIT_EMPLOYEE_SUCCESS :
             return{
                 ...state,
             };
         case EDIT_EMPLOYEE_FAILED:
             return{
                 ...state,
                 error:action.error
             };
       
         default:
             return state;
 
    }
 };