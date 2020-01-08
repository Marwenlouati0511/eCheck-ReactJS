import React from 'react';
import PageBase from '../../../components/PageBase';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
//import { browserHistory } from 'react-router';
import {getAllDepartement} from '../../../action/GetAllDepartment';
import {editEmploye} from '../../../action/CreateEmployee';
//import md5 from 'js-md5';

class EditEmployee extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            DepartementId:"",
            
        };
      }
    componentDidMount(){
        const user = localStorage.getItem('user')
        this.props.getAllDepartement(user);
      }
    
    _handleSelect(event, index, DepartementId)  {
        this.setState({DepartementId});
    console.log(DepartementId)}

    _handleChange(e,value, label) {
        this.setState({[label]:value});}
    _handleEdit() {
        this.setState({hashcode:this.props.code});
        this.setState({addingE:'true'});
        this.props.editEmploye(
            this.props.employee.Id,
            this.state.Name,
            this.state.Address,
            this.state.RegistrationCode,
            this.state.hashcode,
            this.state.Email,
            this.state.DepartementId,
            this.props.user
            );
        }
        
    render(){
       
        return(
            <PageBase title="Edit Employee" style={styles.main}>
                <Paper style={styles.paper} zDepth={1}>
                  <form>
                    <TextField
                        defaultValue={this.props.employee.Name}
                        floatingLabelText="Employe Name"
                        fullWidth={true}
                        onChange={(e,value)=>{this._handleChange(e,value,'Name');}}/>
                     <TextField
                        defaultValue={this.props.employee.Address}
                        floatingLabelText="Address"
                        fullWidth={true}
                        onChange={(e,value)=>{this._handleChange(e,value,'Address');}}/>
                     <SelectField
                        floatingLabelText="Departments"
                        value={this.state.DepartementId}
                        onChange={this._handleSelect.bind(this)}>

                        {this.props.departementList.map(item=>
                            <MenuItem key={item.Id} value={item.Id} primaryText={item.Name} />)}
                    </SelectField>
                    <TextField
                        defaultValue={this.props.employee.RegistrationCode}
                        floatingLabelText="Registration Code"
                        fullWidth={true}
                        onChange={(e,value)=>{this._handleChange(e,value,'RegistrationCode');}}/>
                    <TextField
                        defaultValue={this.props.employee.Email}
                        floatingLabelText="Email"
                        fullWidth={true}
                        onChange={(e,value)=>{this._handleChange(e,value,'Email');}}/>
                   
                        <Link to="/employees" >
                    <RaisedButton label="Cancel"
                        style={styles.Btn}
                        primary={true}/>
                        </Link> 
                         <RaisedButton label="Save"
                        style={styles.Btn}
                        secondary={true}
                        onClick={()=>this._handleEdit()}
                        />    
                    </form>
                </Paper>
            </PageBase>);}}
     
const styles={
  main: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',},
  paper: {
    padding: 40,
    overflow: 'auto',
    },
  Btn: {
    float:'right',
    margin: 12,},
};

const mapStateToProps = state => {
	return {
    user: state.auth.user,
    employee: state.details.employee,
    departementList: state.GetDepartement.departementList,
	};
};
export default connect(mapStateToProps,{getAllDepartement,editEmploye})(EditEmployee);