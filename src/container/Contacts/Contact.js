import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Contacts.css'

class Contact extends Component {
    state={
        showData:false
      }
      onClick=()=>{
        this.setState({showData:!this.state.showData})
      }
    render(){
    const { id }=this.props;
    return (
    <React.Fragment>
      <div className='card card-body mb-3' >
        <h4 >{this.props.name}  <i onClick={this.onClick} className='fas fa-angle-down' >  </i> <Link to={`edit/${id}`}><i onClick={this.props.onDeleteClick}  className='fas fa-pen green' ></i></Link> <i onClick={this.props.onDeleteClick}  className='fas fa-times red' ></i></h4>
        
            {this.state.showData ? 
            <div>
                <p className='list-group-item' >{this.props.phone}</p>
                <p className='list-group-item' >{this.props.email}</p>
            </div>    
            :null}
        
      </div>
      <br />
    </React.Fragment>
  )};
};
export default Contact;
