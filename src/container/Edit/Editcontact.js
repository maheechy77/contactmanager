import React, { Component } from 'react';
import axios from 'axios';

import Input from '../../components/layout/Input';
import { Consumer } from '../../Context';

class Editcontact extends Component {
    state={
        name:'',
        email:'',
        phone:'',
        error:{}
        /* for select input feild need the values of option in state
        options:[
            {value:'male', displayValue:'Male'},
            {value:'female', displayValue:'Female'}
        ]*/
    }
    async componentDidMount(){
        const { id }=this.props.match.params;
        const res =await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const contact=res.data;
        this.setState({
            name:contact.name,
            email:contact.email,
            phone:contact.phone
        })
    }
    onSubmit=async (dispatch,e)=>{
        e.preventDefault();

        const { id }=this.props.match.params;
        const { name,phone,email }= this.state;
        if(name===''){
            this.setState({error:{name:'Name is Required!'}});
            return;
        }
        if(email===''){
            this.setState({error:{email:'Email is Required!'}});
            return;
        }
        if(phone===''){
            this.setState({error:{phone:'Phone is Required!'}});
            return;
        }
        const newData={
            name,
            email,
            phone
        };
        const res= await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,newData);
        dispatch({type:'UPDATE_CONTACT' , payload:res.data});

        this.props.history.push('/');
        this.setState({
            name:'',
            email:'',
            phone:'',
            error:{}
        });
    }
    onChange=(e) => {
        this.setState({[e.target.name]:e.target.value});
    }
  render() {
      const { name,phone,email,error }= this.state;
    return (
    <Consumer>
        {value=>{
            const { dispatch }=value;
            return(
                <div className='container' >
                <div className='card'>
                <div className='card-header'><h3>Add Contact</h3></div>
                <div className='card-body'>
                <form onSubmit={(e) => this.onSubmit(dispatch,e)}>
                <Input 
                    label='Name'
                    InputType='input'
                    Type='text'
                    placeholder='Enter Your Name'
                    name='name'
                    value={name}
                    onChange={this.onChange}
                    error={error.name}
                />
                <Input 
                    label='Email'
                    InputType='input'
                    Type='text'
                    placeholder='Enter Your Email'
                    name='email'
                    value={email}
                    onChange={this.onChange}
                    error={error.email}
                />
                <Input 
                    label='Phone'
                    InputType='input'
                    Type='text'
                    placeholder='Enter Your Phone'
                    name='phone'
                    value={phone}
                    onChange={this.onChange}
                    error={error.phone}
                />
                <input 
                    type='submit'
                    value='Edit Contact'
                    className='form-control form-control-sm btn btn-success'
                />
            </form>    
            </div>
        </div>
      </div>
            );
        }}      
    </Consumer>
    )
  }
};
export default Editcontact;