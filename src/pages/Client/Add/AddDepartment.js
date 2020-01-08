import React from 'react';
import PageBase from '../../../components/PageBase';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';
import {newDepartement} from '../../../action/CreateDepartement';


class AddDepartment extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            errorTextName:"",
            errorTextDescription:"",
        };
      }



    _handleChange(e,value, label) {
        this.setState({errorTextName:"",});
        this.setState({errorTextDescription:"",});
        this.setState({[label]:value});
      }
    _handleNew() {
        //console.log('Department',this.state.Name,'Description',this.state.Description),
        this.setState({adding:'true'});

        if(this.state.Name===undefined && this.state.Description===undefined){
            this.setState({errorTextName:'Department Name is required'});
            this.setState({errorTextDescription:'Department Description is required'});
          }
        else if(this.state.Name===undefined || this.state.Description==="" ) {
            this.setState({errorTextName:'Department Name is required'});
        }
        else if(this.state.Description===undefined || this.state.Name==="") {
            this.setState({errorTextName:'Department Description is required'});
        }
        else{
            this.props.newDepartement(this.state.Name,this.state.Description,this.props.user);}}
       
    render(){
        return(
            <PageBase title="Create New Department" style={styles.main}>
                <Paper style={styles.paper} zDepth={1}>
                    <form>
                    <TextField
                        hintText="Department Name"
                        floatingLabelText="Department Name"
                        fullWidth={true}
                        errorText={this.state.errorTextName}
                        onChange={(e,value)=>{this._handleChange(e,value,'Name');}}
                         />
                    <TextField
                        hintText="Depatement Description"
                        floatingLabelText="Depatement Description"
                        fullWidth={true}
                        errorText={this.state.errorTextDescription}
                         onChange={(e,value)=>{this._handleChange(e,value,'Description');}}/>
                        <div>
                    <RaisedButton label="Create"
                        style={styles.Btn}
                        secondary={true}
                        onClick={()=>this._handleNew()}
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
      error: state.addD.error,
      adding:state.addD.adding,
      user: state.auth.user,
    };
  };
export default connect(mapStateToProps,{newDepartement})(AddDepartment);