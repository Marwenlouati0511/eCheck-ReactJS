import React from 'react';
//import {Link} from 'react-router';
//import {pink500, grey200, grey500} from 'material-ui/styles/colors';
import PageBase from '../../components/PageBase';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import { TextField } from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import {getClient,editClient} from '../../action/AuthAction';
import CircularProgress from 'material-ui/CircularProgress';


class ProfilePage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        showMe:true
    };
  }
  
  componentDidMount(){
    const user = localStorage.getItem('user')
      this.props.getClient(user);
    }
  
  _handleChange(e,value, label) {
    this.setState({[label]:value});}

  Edit(){
    if (this.props.loggingIn){
    this.props.editClient(
      this.props.data.Id,
      this.props.user,
      this.state.Name,
      this.state.Email,this.state.CompanyName,
      this.state.Address,
      this.state.Phonenumber,
      this.state.Password
    )
  }}
 
  render(){
    //console.log(this.props.data)
  return (
    <PageBase>
        <Paper style={styles.paper} zDepth={1}>
          <form>
            <div>
           
            
            { this.props.loadingProfileData ? 
            <CircularProgress style={styles.loginBtn} color={'#FE4181'}/> 
            :
            <div> 
             <TextField
                defaultValue={this.props.data.CompanyName}
                floatingLabelText="Campany Name"
                fullWidth={true}
                onChange={(e,value)=>{this._handleChange(e,value,'CompanyName');}}/>
                
                
              <TextField
              defaultValue={this.props.data.Email}
              floatingLabelText="Your Email"
                fullWidth={true}
                onChange={(e,value)=>{this._handleChange(e,value,'Email');}}/>
                
                
              <TextField
                defaultValue={this.props.data.Address}
                floatingLabelText="Address"
                fullWidth={true}
                onChange={(e,value)=>{this._handleChange(e,value,'Address');}}/>
                
                
              <TextField
              defaultValue={this.props.data.Phonenumber}
              floatingLabelText="Phone number"
                fullWidth={true}
                onChange={(e,value)=>{this._handleChange(e,value,'Phonenumber');}}/>
                    <TextField
                        disabled={true}
                        fullWidth={true}
                        type='password'
                        hintText="Change Your Password"
                        />
                      
                    <TextField
                      hintText="Current Password"
                      floatingLabelText="Current Password"
                      type='password'
                      
                      />
                    <TextField
                      hintText="New Password"
                      floatingLabelText="New Password"
                      type='password'
                      fullWidth={true}
                      />
                      
                    <TextField
                      hintText="Confirm New Password "
                      floatingLabelText="Confirm New Password"
                      type='password'
                      fullWidth={true}
                      onChange={(e,value)=>{this._handleChange(e,value,'Password');}}/>
            </div>
            }
          
             
           
             
            <RaisedButton label="Update Profile"
                      style={styles.saveBtn}
                      secondary={true}
                      onClick={()=>this.Edit()}
              />
            </div>
          </form>
          </Paper>
        </PageBase>
  );
}}

const styles={
  main: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
  },
  paper: {
      padding: 40,
      overflow: 'auto',
      
    },
saveBtn: {
    float:'right'
},
};

const mapStateToProps = (state) => {
	return {
    data: state.auth.data,
    user: state.auth.user,
    loggingIn: state.auth.loggingIn,
    loadingProfileData:state.auth.loadingProfileData
	};
}

export default connect(mapStateToProps,{getClient,editClient}) (ProfilePage);
