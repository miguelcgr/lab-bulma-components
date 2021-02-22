import React, { Component } from 'react'
import Coolbutton from '../coolbutton/Coolbutton';
import Formfield from '../formfield/Formfield'
import Navbar from '../navbar/Navbar'
import './Signup.css';

export default class Signup extends Component {
    render() {
        return (
            <div className='signup'>
          
                <Navbar />
               <Formfield label="Name" type="text" placeholder="e.g Miguel Calvo" />
               <Formfield label="Email" type="text" placeholder="e.g miguel@email.com" />
               <Formfield label="Password" type="password" placeholder="e.g secret " />
               <Coolbutton class='button  is-rounded is-small is-success' text= "Signup"/>
              
            </div>
        )
    }
}
