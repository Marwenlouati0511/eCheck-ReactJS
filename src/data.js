import React from 'react';
import Employe from 'material-ui/svg-icons/social/group-add';
import Department from 'material-ui/svg-icons/social/domain';
//import Settings from 'material-ui/svg-icons/action/settings';
import Static from 'material-ui/svg-icons/action/assessment';
import Out from 'material-ui/svg-icons/action/lock';
import Person from 'material-ui/svg-icons/action/account-circle';
import {pink600} from 'material-ui/styles/colors';


/*const iconStyles = {
  marginRight: 24,
};*/
const data = {
  menu: [
    { text: 'Employees', icon: <Employe color={pink600}/>, link: '/employees' },
    { text: 'Depatements', icon: <Department color={pink600}/>, link: '/departements' },
    { text: 'statistics', icon: <Static color={pink600}/>, link: '/static' },
    { text: 'Profile', icon: <Person color={pink600}/>, link: '/profile' },
  ],
  new: [
    { text: 'Companies', icon: <Employe color={'#546E7A'}/>, link: '/companies' },
    { text: 'statistics', icon: <Static color={'#546E7A'}/>, link: '/adminStatic' },
    { text: 'Profile', icon: <Person color={'#546E7A'}/>, link: '/adminProfile' },
    { text: 'Sign Out', icon: <Out color={'#546E7A'}/>, link: '/admin/login' }
  ],
  };
export default data;
