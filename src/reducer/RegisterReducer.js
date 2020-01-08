import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from '../action/Constant';

const INITIAL_STATE={
    isRegitering:false,
    error:'',
};
export default (state=INITIAL_STATE,action)=>{
   switch(action.type){
       case REGISTER_REQUEST:
            return{
                ...state,
                isRegitering:true,
            };
        case REGISTER_SUCCESS :
            return{
                ...state,
            };
        case REGISTER_FAILURE:
            return{
                ...state,
                error:action.error
            };
        default:
            return state;

   }
};