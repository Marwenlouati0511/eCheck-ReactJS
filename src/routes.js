import React from 'react';
import { Route, IndexRoute} from 'react-router';
import App from './pages/App';
import NotFoundPage from './pages/NotFoundPage.js';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import WelcomePage from './pages/WelcomePage';
//Client Session
import ProfilePage from './pages/Client/ProfilePage';
import EmployeesPage from './pages/Client/EmployeesPage';
import DepartementPage from './pages/Client/DepartementPage';
import AddEmpolyee from './pages/Client/Add/AddEmployee';
import InfoPage from './pages/Client/InfoPage';
import AddDepartment from './pages/Client/Add/AddDepartment';
import StaticPage from './pages/Client/StaticPage';
import requireAuth from './components/common/requireAuth';
//Admin session
import AdminPage from './pages/Admin/AdminPage';
import CompaniesPage from './pages/Admin/CompaniesPage';
import StaticsAdmin from './pages/Admin/StaticsAdmin';
import AdminProfile from './pages/Admin/AdminProfile';
import LoginAdmin from './pages/LoginAdmin';
import AddCompany from './pages/Admin/AddCompany';
import EditDepartement from './pages/Client/Add/EditDepartment';
import EditEmploye from './pages/Client/Add/EditEmploye';

export default (
  <Route>
    <Route path="welcome" component={(WelcomePage)}/>
    <Route path="login" component={(LoginPage)}/>
    <Route path="register" component={(RegisterPage)}/>
    <Route path="/admin/login" component={(LoginAdmin)}/>
      
      <Route path="/admin" component={(AdminPage)}>
        <IndexRoute component={CompaniesPage} />
        <Route path="/companies" component={CompaniesPage}/>
        <Route path="/adminStatic" component={StaticsAdmin}/>
        <Route path="/adminProfile" component={AdminProfile}/>
        <Route path="/add-company" component={AddCompany}/>
      </Route>
      
      <Route path="/" component={requireAuth(App)}>
        <IndexRoute component={EmployeesPage} />
        <Route path="static" component={StaticPage}/>
        <Route path="profile" component={ProfilePage}/>
        <Route path="employees" component={EmployeesPage}/>
        <Route path="employe-info" component={InfoPage}/>
        <Route path="add-employee" component={AddEmpolyee}/>
        <Route path="add-department" component={AddDepartment}/>
        <Route path="/edit-departement" component={EditDepartement}/>
        <Route path="/edit-employe" component={EditEmploye}/>
        <Route path="departements" component={DepartementPage}/>
        <Route path="*" component={NotFoundPage}/>
      </Route>
  </Route>
);
