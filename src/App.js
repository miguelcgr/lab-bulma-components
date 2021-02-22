import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from './navbar/Navbar';
import FormField from './formfield/Formfield';
import CoolButton from './coolbutton/Coolbutton';
import Signup from './signup/Signup';

const App = () => {
  return <div>
  
  <Navbar />

  <FormField label="Name" type="text" placeholder="e.g Miguel Calvo" />
  <FormField label="Email" type="email" placeholder="e.g. miguelcalvo@email.com" />


  <Signup />

  </div>

};

export default App;
