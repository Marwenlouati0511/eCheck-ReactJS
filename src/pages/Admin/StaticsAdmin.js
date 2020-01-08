import React from 'react';
import {connect} from 'react-redux';
import PageBase from '../../components/PageBase';
//import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class StaticAdmin extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
        };
      }
      handleChange  (event, index, value)  {this.setState({value});}
    render(){
        return(
            <PageBase title="Statistics">
            <div>
                <h1>Rapports</h1>
                
                <SelectField
                        floatingLabelText="Rapports"
                        value={this.state.value}
                        onChange={this.handleChange}>
                    <MenuItem value={1} primaryText="1" />
                    <MenuItem value={2} primaryText="2" />
                    <MenuItem value={3} primaryText="3" />
                    <MenuItem value={4} primaryText="4" />
                    <MenuItem value={5} primaryText="5" />
                </SelectField>
                <br />
            </div>
            </PageBase>
        )

    }
}

/*const styles={
        paper: {
            padding: 20,
            overflow: 'auto',
            borderRadius: 30,
            zDepth:3
          },
    };*/
export default connect()(StaticAdmin);
