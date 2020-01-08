import React from 'react';
import {connect} from 'react-redux';
import PageBase from '../../components/PageBase';

  
class testPage extends React.Component{
 
  render(){
  return (
    <PageBase title={this.props.username}>
      <div>
      
      </div>
    </PageBase>
    
  )
}}

export default connect (null)(testPage);