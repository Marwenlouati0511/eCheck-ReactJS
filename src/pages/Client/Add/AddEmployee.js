import React from 'react';
import PageBase from '../../../components/PageBase';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {getAllDepartement} from '../../../action/GetAllDepartment';
import {newEmployee,updateCode} from '../../../action/CreateEmployee';
import md5 from 'js-md5';
class AddEmployee extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            errorTextName:"",
            errorTextAddress:"",
            errorTextCode:"",
            errorTextEmail:"",
            DepartementId:"",
            
        };
      }

    componentDidMount(){
        const user = localStorage.getItem('user')
        this.props.getAllDepartement(user);
      }
    
    _handleSelect(event, index, DepartementId)  {
        this.setState({DepartementId});
    //console.log(DepartementId)
}

    _handleChange(e,value, label) {
        this.setState({errorTextName:"",});
        this.setState({errorTextAddress:"",});
        this.setState({errorTextCode:"",});
        this.setState({errorTextEmail:"",});
        this.setState({[label]:value});}
    _handleNew() {
        const hashcode = md5(this.state.RegistrationCode);
        this.setState({addingE:'true'});
        if(this.state.Name===undefined && 
           this.state.Address===undefined && 
           this.state.RegistrationCode===undefined && 
           this.state.Email===undefined){
            this.setState({errorTextName:'Employee Name is required'});
            this.setState({errorTextAddress:'The Address is required'});
            this.setState({errorTextCode:'The Registration Code is required'});
            this.setState({errorTextEmail:'The Email is required'});
          }
          else if(this.state.Name===undefined || this.state.Name===""){
            this.setState({errorTextName:'Employee Name is required'});
          }
          else if(this.state.Address===undefined || this.state.Address===""){
            this.setState({errorTextAddress:'The Address is required'});
          }
          else if(this.state.RegistrationCode===undefined || this.state.RegistrationCode===""){
            this.setState({errorTextCode:'The Registration Code is required'});
          }
          else if(this.state.Email===undefined || this.state.Email===""){
            this.setState({errorTextEmail:'The Email is required'});
          }
          else
        {this.props.newEmployee(
            this.state.Name,
            this.state.Address,
            this.state.RegistrationCode,
            hashcode,
            this.state.Email,
            this.state.DepartementId,
            this.props.user
        );}
        }
        
    render(){
        return(
            <PageBase title="Create New Employee" style={styles.main}>
                <Paper style={styles.paper} zDepth={1}>
                  <form>
                    <TextField
                        hintText="Employee Name"
                        floatingLabelText="Employee Name"
                        fullWidth={true}
                        errorText={this.state.errorTextName}
                        onChange={(e,value)=>{this._handleChange(e,value,'Name');}}/>
                     <TextField
                        hintText="Address"
                        floatingLabelText="Address"
                        fullWidth={true}
                        errorText={this.state.errorTextAddress}
                        onChange={(e,value)=>{this._handleChange(e,value,'Address');}}/>
                     <SelectField
                        floatingLabelText="Departments"
                        value={this.state.DepartementId}
                        onChange={this._handleSelect.bind(this)}>

                        {this.props.departementList.map(item=>
                            <MenuItem key={item.Id} value={item.Id} primaryText={item.Name} />)}
                    </SelectField>
                    <TextField
                        hintText="Registration Code"
                        floatingLabelText="Registration Code"
                        fullWidth={true}
                        errorText={this.state.errorTextCode}
                        onChange={(e,value)=>{this._handleChange(e,value,'RegistrationCode');}}/>
                    <TextField
                        hintText="Email"
                        floatingLabelText="Email"
                        fullWidth={true}
                        errorText={this.state.errorTextEmail}
                        onChange={(e,value)=>{this._handleChange(e,value,'Email');}}/>
                    <RaisedButton label="Create"
                        style={styles.Btn}
                        secondary={true}
                        onClick={()=>this._handleNew()}
                        />
                        <Link to="/employees" >
                    <RaisedButton label="Cancel"
                        style={styles.Btn}
                        primary={true}/>
                        </Link>     
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
    addingE:state.addE.adding,
    departementList: state.GetDepartement.departementList
	};
};
export default connect(mapStateToProps,{getAllDepartement,newEmployee,updateCode})(AddEmployee);