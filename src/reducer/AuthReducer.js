import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,LOGOUT,
  GET_CLIENT_REQUEST,
  GET_CLIENT_SUCCESS,
  GET_CLIENT_FAILED,
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAILED,
  GET_NEW_TOKEN
  
} from '../action/Constant';

const INITIAL_STATE={
    loggingIn: false, 
    loggingOut: false,
    loadingProfileData:false,
    error: '', 
    token:'',
    data:"",
    success:'',
    user:""
   
};
export default (state=INITIAL_STATE,action)=>{
    switch (action.type) {
      //log to Profile
        case LOGIN_REQUEST:
          return {...state,
            loggingIn: true,
          };
        case LOGIN_SUCCESS:
          return {...state,
            loggingIn: false,
            token:action.payload,
          };
        case LOGIN_FAILURE:
          return {...state,
            loggingIn: false,
          error:action.payload};
        case LOGOUT:
          return {...state,
          loggingOut:true};
        //Details Profile
        case GET_CLIENT_REQUEST:
        return {...state,
          loadingProfileData:true
        };
      case GET_CLIENT_SUCCESS:
        return {...state,
          loadingProfileData:false,
          data:action.payload,
        };
      case GET_CLIENT_FAILED:
        return {...state,
          loadingProfileData:false,
        error:action.payload};
        //Edit Profile
      case EDIT_PROFILE_REQUEST:
        return {...state,
        };
        case EDIT_PROFILE_SUCCESS:
        return {...state,
          
          success:action.payload,
        };
      case EDIT_PROFILE_FAILED:
        return {...state,
        error:action.payload};
        case GET_NEW_TOKEN:
        return {
            ...state,
            user:action.payload,
        }
        default:
          return state;
      }
    }