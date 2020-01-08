import React from 'react';
import PageBase from '../../../components/PageBase';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {editDepartement} from '../../../action/CreateDepartement';
import {Link} from 'react-router';


class EditDepartment extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
      }

   
      
    _handleChange(e,value, label) {
        this.setState({[label]:value});
      }
    _handleEdit() {
        this.props.editDepartement(
            this.props.departement.Id,
            this.state.Name,
            this.state.Description,
            this.props.user);}
       
    render(){
        return(
            <PageBase title="Edit Department" style={styles.main}>
                <Paper style={styles.paper} zDepth={1}>
                    <form>
                        <TextField
                            defaultValue={this.props.departement.Name}
                            floatingLabelText="Department Name"
                            fullWidth={true}
                            errorText={this.state.errorTextName}
                            onChange={(e,value)=>{this._handleChange(e,value,'Name');}}
                            /><br />
                        <TextField
                            defaultValue={this.props.departement.Description}
                            floatingLabelText="Department Description"
                            fullWidth={true}
                            errorText={this.state.errorTextDescription}
                            onChange={(e,value)=>{this._handleChange(e,value,'Description');}}/><br />
                            <div>
                                <RaisedButton label="Save"
                                    style={styles.Btn}
                                    secondary={true}
                                    onClick={()=>this._handleEdit()}
                                    />
                                    <Link to="/departements" >
                                        <RaisedButton label="Cancel"
                                            style={styles.Btn}
                                            primary={true}
                                            />
                                    </Link>
                            </div>
                    </form>
                </Paper>
            </PageBase>

        );
    }
}

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
  Btn: {
      float:'right',
      margin: 12,
},};
const mapStateToProps = state => {
    return {
        departement: state.GetDepartement.departement,
        user: state.auth.user,
    };
  };
export default connect(mapStateToProps,{editDepartement})(EditDepartment);