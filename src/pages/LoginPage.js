import React,{PropTypes} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {pinkA200} from 'material-ui/styles/colors';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ThemeDefault from '../theme-default';
import Avatar from 'material-ui/Avatar';
import LockIcon from 'material-ui/svg-icons/action/lock-open';
import EmailIcon from 'material-ui/svg-icons/communication/email';
import PasswordIcon from 'material-ui/svg-icons/action/lock-outline';
import {connect} from 'react-redux';
import {login} from '../action/AuthAction';
import FlatButton from 'material-ui/FlatButton';
import Help from 'material-ui/svg-icons/action/help';
import TextFieldIcon from 'material-ui-textfield-icon';
import img from '../images/work1.jpg';
import CircularProgress from 'material-ui/CircularProgress';
//import Popup from 'react-popup';
import '../popup.css';
import Dialog from 'material-ui/Dialog';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
       //loggingIn:'false',
        errorTextEmail:"",
        errorTextPassword:"",
        open:false,
  };
  }
  _handleChange(e,value, label) {
    this.setState({errorTextEmail:''})
    this.setState({errorTextPassword:''})
    this.setState({
        [label]:value
    });
   }
   validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
   }
  _handleSbumit() {
    //case 1
     if(this.state.Email===undefined || this.state.Email==="" ){
        this.setState({errorTextEmail:'email is required'});
     }else if (this.state.Password===undefined || this.state.Password===""){
        this.setState({errorTextPassword:'Password is required'});
     }else if(!this.validateEmail(this.state.Email)){
        this.setState({errorTextEmail:'please enter a validate email'});
     }else{
      this.props.login(this.state.Email,this.state.Password,(error)=>{
        this.setState({open: true});
      });
    }
  }
  renderButton (){
    if(this.props.loggingIn){
            return <CircularProgress style={styles.loginBtn} color={'#FE4181'}/>;}
          
            return (
              <div>
                <RaisedButton label="LOGIN"
                  style={styles.loginBtn}
                  secondary={true}
                  onClick={this._handleSbumit.bind(this)}
                />
                <Dialog
                  actions={this.renderAction()}
                  modal={false}
                  open={this.state.open}
                  onRequestClose={this.handleClose}
                >
                  The Email or password is incorrect!!
                </Dialog>
          </div>  
    );}

handleOpen(){
  this.setState({open: true});
}

handleClose () {
  this.setState({open: false});
}
renderAction(){
  return(
    
  <FlatButton
        label="Ok"
        primary={true}
        onClick={this.handleClose.bind(this)}
      />
     
      );
}
 
  render() {
    
    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
      
        <div style={styles.divStyle}>
          <div style={styles.loginContainer}>
            <Paper style={styles.paper} zDepth={1}>
              <div style={styles.avatar}>
                <Avatar backgroundColor={pinkA200} icon={<LockIcon />} size={70} />
              </div>
              <form>  
              <TextFieldIcon
                hintText="E-mail"
                floatingLabelText="E-mail"
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
                {this.renderButton()} 
              </form>             
            </Paper>

            <div style={styles.buttonsDiv}>
            <FlatButton
              label="Register"
              href="/register"
              style={styles.flatButton}
              icon={<PersonAdd />}
            />
            <FlatButton
              label="Forgot Password?"
              href="/"
              style={styles.flatButton}
              icon={<Help />}
            />
          </div>
          
          </div>
        </div>
      </MuiThemeProvider>
    );
  }}

  LoginPage.propTypes = {
    login: PropTypes.func,
  };
  const styles = {
    main: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
  },
    loginContainer: {
      minWidth: 320,
      maxWidth: 400,
      height: 'auto',
      position: 'absolute',
      top: '20%',
      left: 0,
      right: 0,
      margin: 'auto',
      
    },
    paper: {
      padding: 40,
      overflow: 'auto',
      
    },
    buttonsDiv: {
      textAlign: 'center',
      padding: 10
    },
    flatButton: {
      color: '#9E9E9E'
    },
  
    loginBtn: {
      float: 'right',
    },
    avatar: {
      margin: '1em',
      textAlign: 'center ',
  },
  icon: {
    height: 48,
    width: 48,
    marginTop: 20,
    maxWidth: '100%'
  
  },
  divStyle: {
    backgroundImage: 'url(' + img + ')',
    backgroundSize: 'cover',
    overflow: 'hidden',
    //opacity : 0.7
  }
  };
const mapStateToProps = state => {
	return {
    error: state.auth.error,
    loggingIn: state.auth.loggingIn
	};
};

export default connect(mapStateToProps,{login})(LoginPage);