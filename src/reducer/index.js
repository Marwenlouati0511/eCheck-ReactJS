import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import AdminAuthReducer from './AdminAuthReducer';
import GetEmployeReducer from './GetEmployeReducer';
import RegisterReducer from './RegisterReducer';
import EmployeeDetailsReducer from './EmployeeDetailsReducer';
import GetDepartmentReducer from './GetDepartmentReducer';
import NewDepartmentReducer from './NewDepartmentReducer';
import NewEmployee from './NewEmployee';
import DeleteEmployee from './DeleteEmployee';
import GetCompaniesRedu from './GetCompaniesRedu';
import updateReducer from './updateReducer';
import ReportReducer from './ReportRducer';


const appReducer = combineReducers({
    authA : AdminAuthReducer,
    auth : AuthReducer,
    GetEmploye :GetEmployeReducer,
    GetDepartement : GetDepartmentReducer,
    register : RegisterReducer,
    details : EmployeeDetailsReducer,
    addD : NewDepartmentReducer,
    addE : NewEmployee,
    deleteE : DeleteEmployee,
    comp : GetCompaniesRedu,
    updateE:updateReducer,
    report:ReportReducer,
});

export default appReducer;