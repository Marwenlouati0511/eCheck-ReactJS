import {
    GET_ALL_DEPARTEMENT_REQUEST,
    GET_ALL_DEPARTEMENT_SUCCESS,
    GET_ALL_DEPARTEMENT_FAILURE,
    DEPARTEMENT_SELECTED
} from '../action/Constant';

const INITIAL_STATE={
    departementList:[],
    loadingListDepartement: false,
    error:'',
    departement:''
};
export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case GET_ALL_DEPARTEMENT_REQUEST:
            return{
                ...state,
                loadingListDepartement: true
            };
        case GET_ALL_DEPARTEMENT_SUCCESS:
            return {
                ...state,
                departementList:action.payload,
                loadingListDepartement: false
            };
        case GET_ALL_DEPARTEMENT_FAILURE:
            return{
                ...state,
                error:action.payload,
                loadingListDepartement: false
            };
            case DEPARTEMENT_SELECTED:
            return{
                ...state,
                departement:action.payload,
            };
            default : 
            return state;
    }};