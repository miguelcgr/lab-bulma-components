import React, { Component } from "react";

const Formfield=(props) => {
  
    return (
      <div>
     
        <div class="field">
          <label class="label">{props.label}</label>
          <div class="control">
            <input class="input" type="text" placeholder={props.placeholder} />
          </div>
        </div>
        
      </div>
    );
  
}

export default Formfield