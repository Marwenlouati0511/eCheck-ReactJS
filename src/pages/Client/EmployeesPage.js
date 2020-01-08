import React,{PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {pink500,blue300,white } from 'material-ui/styles/colors';
import PageBase from '../../components/PageBase';
import {getAllEmployee} from '../../action/getAllEmployee';
import Edit from 'material-ui/svg-icons/content/create';
import {EmployeeDetails} from '../../action/EmployeeDetailsAction';
//import {browserHistory} from 'react-router';
//import Popup from 'react-popup';
import '../../popup.css';
import {deleteEmployee} from '../../action/DeleteAction';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete-forever';
import CircularProgress from 'material-ui/CircularProgress';
class EmployeesPage extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        showCheckboxes: false,
        open:false,
      };
    }
    componentDidMount(){
      
      this.props.getAllEmployee(this.props.user);
    }  
    handleOpen(employee){
      this.setState({open: true, idEmployee: employee });
    }
    
    handleClose () {
      this.setState({open: false});
      console.log('i am colse yeyy')
    }
    renderAction(){
      return(
       <div> 
          <FlatButton
            label="Cancel"
            primary={true}
            onClick={this.handleClose.bind(this)}
              />
          <FlatButton
            label="Sure"
            secondary={true}
            onClick={()=>{
              this.setState({open: false}); this.props.deleteEmployee(this.state.idEmployee,this.props.user);
            }}
        />
        </div>
          );
    }
    render(){
      console.log(this.props.employeeList)
      return (
        <PageBase >
          <div>
            <Link to="/add-employee" >
              <FloatingActionButton 
                style={styles.floatingActionButton} 
                mini={true}
                backgroundColor={pink500}>
                <ContentAdd /> 
              </FloatingActionButton>
            </Link>
            {  this.props.loadingListEmployee ? 
            <CircularProgress style={{justifyContent:'center',}} color={'#FE4181'}/>
            :
            <Table >
              <TableHeader 
                displaySelectAll={this.state.showCheckboxes}
                adjustForCheckbox={this.state.showCheckboxes}>
                     <TableRow>
              <TableHeaderColumn colSpan="5" tooltip="Employees List" style={{textAlign: 'center',fontSize:25,color:"#03BEC7"}}>
                Employees List
              </TableHeaderColumn>
            </TableRow>
                <TableRow displayBorder={true} >
                  <TableHeaderColumn style={{fontSize:16}} >Name</TableHeaderColumn>
                  <TableHeaderColumn style={{fontSize:16}}>Address</TableHeaderColumn>
                  <TableHeaderColumn style={{fontSize:16}}>Email</TableHeaderColumn>
                  <TableHeaderColumn style={{fontSize:16}}>Edit</TableHeaderColumn>
                  <TableHeaderColumn style={{fontSize:16}}>Delete</TableHeaderColumn>
                </TableRow>
              </TableHeader>
                <TableBody 
                  displayRowCheckbox={this.state.showCheckboxes}
                  stripedRows={true}>
                  {this.props.employeeList.map(employee=>
                    <TableRow key={employee.Id} selected={false}>
                      <TableRowColumn style={{fontSize:16}}>
                      <Link to="/employe-info" onClick={()=>this.props.EmployeeDetails(employee)}>
                      {employee.Name}
                      </Link>
                      </TableRowColumn>
                      <TableRowColumn style={{fontSize:16}}>{employee.Address}</TableRowColumn>
                      <TableRowColumn style={{fontSize:16}}>{employee.Email}</TableRowColumn>
                      <TableRowColumn style={{fontSize:16}}>
                      <Link to="/edit-employe" onClick={()=>this.props.EmployeeDetails(employee)}>
                        <FloatingActionButton 
                          zDepth={0}  
                          mini={true}
                          backgroundColor={blue300}
                          iconStyle={styles.editButton}
                         >
                         <Edit /> 
                        </FloatingActionButton>
                      </Link>
                      </TableRowColumn>
                      <TableRowColumn style={{fontSize:16}}>
                        <div> 
                            <FloatingActionButton 
                              zDepth={0}  
                              mini={true}
                              backgroundColor={blue300}
                              iconStyle={styles.editButton}
                              onClick={this.handleOpen.bind(this,employee.Id)}
                              >
                                <DeleteIcon /> 
                            </FloatingActionButton>
                            <Dialog
                              actions={this.renderAction()}
                              modal={false}
                              open={this.state.open}
                              onRequestClose={this.handleClose}
                            >
                              Are you sure you want to delete this Employe
                            </Dialog>
                      </div> 
                        </TableRowColumn>
                    </TableRow>
                  )}
                </TableBody>
            </Table>
          }
          </div>
        </PageBase>
      );
}}
EmployeesPage.propTypes = {
  getAllEmployee: PropTypes.func,
};
const styles = {
  floatingActionButton: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  },
  editButton: {
    fill: white,
   
  },
  columns: {
    name: {
      width: '20%',
      fontSize:16
    },
    email: {
      width: '20%',
      fontSize:16
    },
    adress: {
      width: '20%',
      fontSize:16
    },
    delete: {
      width: '10%',
      fontSize:16
    }
  },
};
const mapStateToProps = state => {
	return {
    user: state.auth.user,
    employeeList: state.GetEmploye.employeeList,
    employee: state.details.employee,
    loadingListEmployee:state.GetEmploye.loadingListEmployee,
	};
};
export default connect(mapStateToProps,{getAllEmployee,EmployeeDetails,deleteEmployee})(EmployeesPage);
