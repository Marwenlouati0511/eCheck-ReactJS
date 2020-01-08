import {
    REPORT_ACTIVITY_REQUEST,
    REPORT_ACTIVITY_SUCCESS,
    REPORT_ACTIVITY_FAILED
} from '../action/Constant';

const INITIAL_STATE={
    reporting:false,
    error:'',
    Activity:""
};
export default (state=INITIAL_STATE,action)=>{
   switch(action.type){
       case REPORT_ACTIVITY_REQUEST:
            return{
                ...state,
                reporting:true,
            };
        case REPORT_ACTIVITY_SUCCESS :
            return{
                ...state,
                Activity:action.payload,
                reporting:false,
            };
        case REPORT_ACTIVITY_FAILED:
            return{
                ...state,
                error:action.error,
                reporting:false,
            };
        default:
            return state;

   }
};