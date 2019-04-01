import React, { Component } from 'react';
import axios from 'axios';

import { Consumer } from '../../Context';
import Contact from './Contact';

class Contacts extends Component {
  onDeleteClick=async (id,dispatch)=>{
    try{
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({type:'DELETE_CONTACT', payload:id});
    }
    catch(e){
      dispatch({type:'DELETE_CONTACT', payload:id});
    }
  }
  render() {
    return (
      <div className='container' >
        <Consumer>
        {value=>{
          const { dispatch }=value;
          return(
            <React.Fragment>
              {value.contacts.map(contact=>(
                <Contact
                key={contact.id}
                id={contact.id}
                name={contact.name}
                email={contact.email}
                phone={contact.phone}
                onDeleteClick={()=>this.onDeleteClick(contact.id,dispatch)}
                />
              ))}
            </React.Fragment>
          )
        }}
        </Consumer>
      </div>
    )
  }
};

export default Contacts;
