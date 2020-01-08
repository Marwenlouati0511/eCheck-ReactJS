import {ADMIN_LOGIN_REQUEST,ADMIN_LOGIN_SUCCESS,ADMIN_LOGIN_FAILURE} from '../action/Constant';

const INITIAL_STATE={
    loggingIn: false, 
    //loggingOut: false,
    error: '',
    message:'' 
 
};
export default (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case ADMIN_LOGIN_REQUEST:
          return {...state,
            loggingIn: true,
          };
        case ADMIN_LOGIN_SUCCESS:
          return {...state,
            message:action.payload
          };
        case ADMIN_LOGIN_FAILURE:
          return {...state,
          error:action.payload};
        default:
          return state;
      }
    }