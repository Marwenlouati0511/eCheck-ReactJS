import React from 'react';
//import {Link} from 'react-router';
//import {pink500, grey200, grey500} from 'material-ui/styles/colors';
import PageBase from '../../components/PageBase';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import { TextField } from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';



class AdminProfile extends React.Component{
  render(){
  return (
    <PageBase title="Profile" style={styles.main}>
        <Paper style={styles.paper} zDepth={1}>
          <form>
            <div>
            <TextField
              //floatingLabelText={}
              fullWidth={true}/>
            <TextField
              hintText="Your E-mail"
              //floatingLabelText={}
              fullWidth={true}/>
            <TextField
                disabled={true}
                fullWidth={true}
                type="pasaword"
                hintText="Change Your Password"/>
            <TextField
              hintText="Current Password"
              floatingLabelText="Current Password"
              fullWidth={true}/>
            <TextField
              hintText="New Password"
              floatingLabelText="New Password"
              type="pasaword"
              fullWidth={true}/>
            <TextField
              hintText="Confirm New Password "
              floatingLabelText="Confirm New Password"
              fullWidth={true}/>
            <RaisedButton label="Update Profile"
              style={styles.saveBtn}
              primary={true}/>
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

/*const mapStateToProps = (state) => {
	
	};
}*/

export default connect(null) (AdminProfile);