import{
    GET_ALL_EMPLOYEE_REQUEST,
    GET_ALL_EMPLOYEE_SUCCESS,
    GET_ALL_EMPLOYEE_FAILED,
    GET_EMPLOYEE_REQUEST,
    GET_EMPLOYEE_SUCCESS,
    GET_EMPLOYEE_FAILED
} from '../action/Constant';

const INITIAL_SATTE={
    employeeList: [],
    loadingListEmployee: false,
    data:"",
    error:'',
    
};
export default (state=INITIAL_SATTE,action) =>{
    switch(action.type){
        case GET_ALL_EMPLOYEE_REQUEST:
            return{
                ...state,
                loadingListEmployee:true,
                
        };
        case GET_ALL_EMPLOYEE_SUCCESS :
            return{
                ...state,
                employeeList:action.payload,
                loadingListEmployee:false,

            };
        case GET_ALL_EMPLOYEE_FAILED :
            return{
                ...state,
                error:action.error,
                loadingListEmployee:false,
            };
            case GET_EMPLOYEE_REQUEST:
            return{
                ...state,
                loading:true,
                
        };
        case GET_EMPLOYEE_SUCCESS :
            return{
                ...state,
                data:action.payload,

            };
        case GET_EMPLOYEE_FAILED :
            return{
                ...state,
                error:action.error
            };
        default : 
            return state;
    }
};