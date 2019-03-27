import React, {Component} from 'react';
import SimpleForm from './SimpleForm';
import SimpleFormValues from './SimpleFormValues';
// import { Values } from "redux-form-website-template";

class Form extends Component {
  render() {
    return (
      <div>
        <SimpleForm onSubmit={SimpleFormValues} />
        {/* <Values form="simple" /> */}
      </div>
    )
  }
}

export default Form;
