import React from 'react';
import {connect} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Face from 'material-ui/svg-icons/action/face';
import ThemeDefault from '../theme-default';
import {loginAdmin} from '../action/AdminAuth';
import Image from '../images/admin1.jpg';
import TextFieldIcon from 'material-ui-textfield-icon';
import EmailIcon from 'material-ui/svg-icons/communication/email';
import PasswordIcon from 'material-ui/svg-icons/action/lock-outline';

class LoginAdmin extends React.Component {
    constructor(props) {
        super(props);
          this.state = {
            loggingIn:'false',
            errorTextEmail:"",
            errorTextPassword:""
      };}
    _handleChange(e,value, label) {
        this.setState({errorTextEmail:''})
        this.setState({errorTextPassword:''})
        this.setState({
            [label]:value
        });
       }
    _handleSbumit() {
        console.log('Email:' ,this.state.Email,'password:',this.state.Password);
        this.setState({loggingIn:'true'});
        if(this.state.Email===undefined && this.state.Password===undefined){
            this.setState({errorTextEmail:'email is required'});
            this.setState({errorTextPassword:'Password is required'});}
          //case 2
          else if(this.state.Email==="" && this.state.Password===""){
            this.setState({errorTextEmail:'email is required'});
            this.setState({errorTextPassword:'Password is required'});
          }
          //case 3
          else if(this.state.Email===undefined || this.state.Email==="" ) {
            this.setState({errorTextEmail:'email is required'});
          }
          //case 4
          else if(this.state.Password===undefined || this.state.Password===""){
            this.setState({errorTextPassword:'Password is required'});
          }
          //case 5
          else{
            this.props.loginAdmin(this.state.Email,this.state.Password);}}
    
    render(){
        return (
            <MuiThemeProvider muiTheme={ThemeDefault}>
            <div style={styles.divStyle}>
                <div style={styles.loginContainer}>
                <Paper style={styles.paper}>
                    <div style={styles.avatar}>
                        <Avatar backgroundColor={'#546E7A'} icon={<Face />} size={70} />
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
                        icon={<PasswordIcon/>}
                        fullWidth={true}
                        iconPosition={'before'}
                        errorText={this.state.errorTextPassword}
                        onChange={(e,value)=>{this._handleChange(e,value,'Password');}}
                    />  
                    <RaisedButton label="Login"
                        backgroundColor={'#546E7A'}
                        style={styles.loginBtn}
                        onClick={()=>this._handleSbumit()}
                    />
                    </form>
                </Paper>

                </div>
            </div>
            </MuiThemeProvider>
    );}}

const styles = {
    loginContainer: {
      minWidth: 320,
      maxWidth: 400,
      height: 'auto',
      position: 'absolute',
      top: '20%',
      left: 0,
      right: 0,
      margin: 'auto'
    },
    paper: {
      padding: 40,
      overflow: 'auto',
      
      
    },
    loginBtn: {
      float: 'right'
    },
    avatar: {
        margin: '1em',
        textAlign: 'center ',
    },
    divStyle: {
        backgroundImage: 'url(' + Image + ')',
        backgroundSize: 'cover',
        overflow: 'hidden',
      }
    
  };
const mapStateToProps = state => {
	return {
    error: state.auth.error,
	};
};

export default connect(mapStateToProps,{loginAdmin})(LoginAdmin);