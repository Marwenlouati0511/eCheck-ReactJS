import{
    GET_COMPANIES_REQUEST,
    GET_COMPANIES_SUCCESS,
    GET_COMPANIES_FAILURE,
} from '../action/Constant';

const INITIAL_SATTE={
    companiesList: [],
    loading: false,
    error:'',
    
};
export default (state=INITIAL_SATTE,action) =>{
    switch(action.type){
        case GET_COMPANIES_REQUEST:
            return{
                ...state,
                loading:true,
                
        };
        case GET_COMPANIES_SUCCESS:
            return{
                ...state,
                companiesList:action.payload,
            };
        case GET_COMPANIES_FAILURE:
            return{
                ...state,
                error:action.error
            };
        default : 
            return state;
    }
};