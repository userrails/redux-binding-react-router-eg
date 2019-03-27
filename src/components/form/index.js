import React, {Component} from 'react';
import SimpleForm from './SimpleForm';
import showResults from './showResults';

class Form extends Component {
  render() {
    return (
      <div>
        <SimpleForm onSubmit={showResults} />
      </div>
    )
  }
}

export default Form;
