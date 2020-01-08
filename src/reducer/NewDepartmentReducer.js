import {
    ADD_DEAPARTEMENT_REQUEST,
    ADD_DEAPARTEMENT_SUCCESS,
    ADD_DEAPARTEMENT_FAILURE,
    EDIT_DEAPARTEMENT_REQUEST,
    EDIT_DEAPARTEMENT_SUCCESS,
    EDIT_DEAPARTEMENT_FAILURE
} from '../action/Constant';

const INITIAL_STATE={
    adding:false,
    error:'',
    data:""
};
export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case ADD_DEAPARTEMENT_REQUEST:
             return{
                 ...state,
                 adding:true,
             };
        case ADD_DEAPARTEMENT_SUCCESS :
            return{
                ...state,
            };
        case ADD_DEAPARTEMENT_FAILURE:
            return{
                ...state,
                error:action.error
            };
        case EDIT_DEAPARTEMENT_REQUEST:
             return{
                 ...state,
                 adding:true,
             };
         case EDIT_DEAPARTEMENT_SUCCESS :
             return{
                 ...state,
                 data:action.payload
             };
         case EDIT_DEAPARTEMENT_FAILURE:
             return{
                 ...state,
                 error:action.error
             };
        default:
             return state;
 
    }
 };