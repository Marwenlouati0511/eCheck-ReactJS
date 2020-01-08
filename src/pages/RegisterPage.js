import React,{PropTypes}  from 'react';  
import { connect } from 'react-redux';  
import ThemeDefault from '../theme-default';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';
import {registration} from '../action/RegisterAction';
import List from 'material-ui/svg-icons/action/assignment-ind';
import Avatar from 'material-ui/Avatar';
import TextFieldIcon from 'material-ui-textfield-icon';
import Company from 'material-ui/svg-icons/action/account-circle';
import EmailIcon from 'material-ui/svg-icons/communication/email';
import PasswordIcon from 'material-ui/svg-icons/action/lock-outline';
import Phone from 'material-ui/svg-icons/communication/phone';
import AddressIcon from 'material-ui/svg-icons/action/room';
import Dialog from 'material-ui/Dialog';
import img from '../images/23.jpg';
import FlatButton from 'material-ui/FlatButton';
import { browserHistory } from 'react-router';
class RegisterPage extends React.Component  {
  constructor(props) {
    super(props);
      this.state = {
        errorTextName:"",
        errorTextEmail:"",
        errorTextPassword:"",
        errorTextAddress:"",
        errorTextPhone:"",
        open:false,

  };}
  handleOpen(){
    this.setState({open: true});
        console.log('i am openn yeyy')
  }
  
  handleClose () {
    this.setState({open: false});
    browserHistory.push("/login");
    console.log('i am colse yeyy')
  }


  _handleChange(e,value, label) {
    this.setState({errorTextName:"",});
    this.setState({errorTextEmail:"",});
    this.setState({errorTextPassword:"",});
    this.setState({errorTextAddress:"",});
    this.setState({errorTextPhone:"",});
    this.setState({[label]:value});
  }

  _handleSignup() {
//console.log('Company is',this.state.CompanyName,'Email',this.state.Email,'Password',this.state.Password),
    this.setState({isRegitering:'true'});
    if(this.state.CompanyName===undefined && 
      this.state.Email===undefined && 
      this.state.Password===undefined &&
      this.state.Address===undefined &&
      this.state.Phonenumber===undefined
    ){
      this.setState({errorTextName:'Company Name is required'});
      this.setState({errorTextEmail:'email is required'});
      this.setState({errorTextPassword:'Password is required'});
      this.setState({errorTextAddress:"Address is required",});
      this.setState({errorTextPhone:"Email is required",});
    }
    else if(this.state.CompanyName===undefined ) {
      this.setState({errorTextName:'Company Name is required'});}

    else if(this.state.Email===undefined ) {
      this.setState({errorTextEmail:'email is required'});

    }else if(this.state.Password===undefined){
      this.setState({errorTextPassword:'Password is required'});

    }else if(this.state.Address===undefined){
      this.setState({errorTextAddress:'Password is required'});

    }else if(this.state.Phonenumber===undefined){
      this.setState({errorTextPhone:'Password is required'});
    }
    else{
     this.props.registration(
       this.state.CompanyName,
       this.state.Email,
       this.state.Password,
       this.state.Address,
       this.state.Phonenumber);
       this.setState({open: true});
      }}

     renderAction(){
      return(
      <FlatButton
            label="Ok"
            primary={true}
            onClick={this.handleClose.bind(this)}
          />);}
  render() {
    return (
    <MuiThemeProvider muiTheme={ThemeDefault}>
      <div style={{ ...styles.main, backgroundImage: 'url(' + img + ')',backgroundSize: 'cover',overflow: 'hidden', }}>
        <div style={styles.registerContainer}>
          <Paper style={styles.paper} zDepth={1}>
          <div style={styles.avatar}>
                <Avatar backgroundColor={'#FF4081'} icon={<List />} size={80} />
              </div>
          <form >
            <TextFieldIcon
                hintText="Company Name"
                floatingLabelText="Company Name"
                fullWidth={true}
                icon={<Company/>}
                iconPosition={'before'}
                errorText={this.state.errorTextName}
                onChange={(e,value)=>{this._handleChange(e,value,'CompanyName');}}
              />
              <TextFieldIcon
                hintText="E-mail"
                floatingLabelText="E-mail"
                type='email'
                icon={<EmailIcon/>}
                fullWidth={true}
                iconPosition={'before'}
                errorText={this.state.errorTextEmail}
                onChange={(e,value)=>{this._handleChange(e,value,'Email');}}
              />
             <TextFieldIcon
                hintText="Password"
                floatingLabelText="Password"
                type='password'
                icon={<PasswordIcon/>}
                fullWidth={true}
                iconPosition={'before'}
                errorText={this.state.errorTextPassword}
                onChange={(e,value)=>{this._handleChange(e,value,'Password');}}
              />  
              <TextFieldIcon
                hintText="Address"
                floatingLabelText="Address"
                icon={<AddressIcon/>}
                fullWidth={true}
                iconPosition={'before'}
                errorText={this.state.errorTextAddress}
                onChange={(e,value)=>{this._handleChange(e,value,'Address');}}
              /> 
              <TextFieldIcon
                hintText="Phone Number"
                floatingLabelText="Phone Number"
                icon={<Phone/>}
                fullWidth={true}
                iconPosition={'before'}
                errorText={this.state.errorTextPhone}
                onChange={(e,value)=>{this._handleChange(e,value,'Phonenumber');}}
              /> 
                <div>
              <RaisedButton label="Register"
                style={styles.registerBtn}
                secondary={true}
                onClick={this._handleSignup.bind(this)}
              />
                  <Dialog
                    actions={this.renderAction()}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                  >
                  Successfuly registred! Please Check your Email for furthur verification
                  </Dialog>
              <Link to="/login" >
                <RaisedButton label="Cancel"
                  style={styles.registerBtn}
                  primary={true}
                    />
                </Link>
            </div>
        </form>
          </Paper>
        </div>
      </div>
    </MuiThemeProvider>
    );
  }}

  RegisterPage.propTypes = {
    registration: PropTypes.func,
  };

  const styles = {
    main: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
  },
  registerContainer: {
    minWidth: 320,
    maxWidth: 400,
    height: 'auto',
    top: '20%',
    left: 0,
    right: 0,
    margin: 'auto'
  },
  paper: {
    padding: 40,
    overflow: 'auto',
  },
  registerBtn: {
    float: 'right',
    margin:12
  },
  avatar: {
    margin: '1em',
    textAlign: 'center ',
},
};

  const mapStateToProps = state => {
    return {
      error: state.register.error,
      isRegitering:state.register.isRegitering,
    };
  };

export default connect(mapStateToProps, {registration})(RegisterPage); 