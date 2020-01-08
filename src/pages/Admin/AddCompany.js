import React from 'react';
import PageBase from '../../components/PageBase';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import {registration} from '../../action/RegisterAction';
import { browserHistory } from 'react-router';

class AddCompany extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            errorTextName:"",
            errorTextAddress:"",
            errorTextPhone:"",
            errorTextEmail:"",
            DepartementId:""

        };
      }
    _handleChange(e,value, label) {
        this.setState({errorTextName:"",});
        this.setState({errorTextAddress:"",});
        this.setState({errorTextPhone:"",});
        this.setState({errorTextEmail:"",});
        this.setState({[label]:value});}
    _handleNew() {
        this.setState({addingE:'true'});
        if(this.state.Name===undefined && 
           this.state.Address===undefined && 
           this.state.Phonenumber===undefined && 
           this.state.Email===undefined){
            this.setState({errorTextName:'Employee Name is required'});
            this.setState({errorTextAddress:'The Address is required'});
            this.setState({errorTextPhone:'The Phone Number is required'});
            this.setState({errorTextEmail:'The Email is required'});
          }
          else if(this.state.Name===undefined || this.state.Name===""){
            this.setState({errorTextName:'Employee Name is required'});
          }
          else if(this.state.Address===undefined || this.state.Address===""){
            this.setState({errorTextAddress:'The Address is required'});
          }
          else if(this.state.Phonenumber===undefined || this.state.Phonenumber===""){
            this.setState({errorTextPhone:'The Registration Code is required'});
          }
          else if(this.state.Email===undefined || this.state.Email===""){
            this.setState({errorTextEmail:'The Email is required'});
          }
          else {
              this.props.registration(
                this.state.Name,
                this.state.Address,
                this.state.Phonenumber,
                this.state.Email,
                ()=>{browserHistory.push("/companies")}
              );
            }}
   
    render(){
        return(
            <PageBase title="Create New Company" style={styles.main}>
                <Paper style={styles.paper} zDepth={1}>
                  <form>
                    <TextField
                        hintText="Company Name"
                        floatingLabelText="Company Name"
                        fullWidth={true}
                        errorText={this.state.errorTextName}
                        onChange={(e,value)=>{this._handleChange(e,value,'Name');}}/>
                     <TextField
                        hintText="Address"
                        floatingLabelText="Address"
                        fullWidth={true}
                        errorText={this.state.errorTextAddress}
                        onChange={(e,value)=>{this._handleChange(e,value,'Address');}}/>
                    <TextField
                        hintText="Phone Number"
                        floatingLabelText="Phone Number"
                        fullWidth={true}
                        errorText={this.state.errorTextPhone}
                        onChange={(e,value)=>{this._handleChange(e,value,'Phonenumber');}}/>
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
                        <Link to="/companies" >
                    <RaisedButton label="Cancel"
                        style={styles.Btn}
                        color={"#546E7A"}/>
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

/*const mapStateToProps = state => {
	return {
    token: state.auth.token,
    addingE:state.addE.adding,
    departementList: state.GetDepartement.departementList
	};
};*/
export default connect(null,{registration})(AddCompany);