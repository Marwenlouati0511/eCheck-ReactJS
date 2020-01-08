import {EMPLOYEE_SELECTED} from '../action/Constant';

const INITIAL_STATE={
    employee:'',
};
export default (state=INITIAL_STATE,action) => {
    switch(action.type){
        case EMPLOYEE_SELECTED :
            return {
                ...state,
                employee:action.payload,
            };
            default:
            return state;
    }
   
};