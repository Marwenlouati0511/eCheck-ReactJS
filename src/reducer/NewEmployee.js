import {
    ADD_EMPLOYEE_REQUEST,
    ADD_EMPLOYEE_SUCCESS,
    ADD_EMPLOYEE_FAILURE,
    GET_INPUT_REQUEST
} from '../action/Constant';

const INITIAL_STATE={
    addingE:false,
    error:'',
    code:''
};
export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case ADD_EMPLOYEE_REQUEST:
             return{
                 ...state,
                 addingE:true,
             };
         case ADD_EMPLOYEE_SUCCESS :
             return{
                 ...state,
             };
         case ADD_EMPLOYEE_FAILURE:
             return{
                 ...state,
                 error:action.error
             };
        case GET_INPUT_REQUEST:
        return {
            ...state,
            code:action.payload,
        }
         default:
             return state;
 
    }
 };