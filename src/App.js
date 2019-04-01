import React, { Component } from 'react';
import {BrowserRouter , Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import {Provider} from './Context';
import Contacts from './container/Contacts/Contacts';
import Header from './components/layout/Header';
import AddContact from './container/Add/Addcontact';
import EditContact from './container/Edit/Editcontact';

class App extends Component {
  render() {
    return (
      <Provider>
          <BrowserRouter basename={process.env.PUBLIC_URL} >
            <div className="App">
              <div className='container' >
                <Header branding='Contact Manager' />
                <Switch>
                  <Route exact path='/' component={Contacts} />
                  <Route exact path='/addcontact' component={AddContact} /> 
                  <Route exact path='/edit/:id' component={EditContact}/>
                </Switch>
              </div>
            </div>
        </BrowserRouter> 
      </Provider>  
    );
  }
}

export default App;
