import React from 'react';
import { Field, reduxForm } from 'redux-form';
import isValidEmail from 'sane-email-validation';
import {states} from '../../data/states';

const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  }

  if (!values.lastName) {
    errors.lastName = 'Required'
  }

  if (!values.email) {
    errors.email = 'Required'
  } else if (!isValidEmail(values.email)) {
    errors.email = 'Invalid Email'
  }
  return errors
}

const createRenderer = render => ({input, meta, label, ...rest}) =>
  <div
    className={[
      meta.error && meta.touched ? 'error' : '',
      meta.active ? 'active' : ''
    ].join(' ')}
    >
    <label>
      {label}
    </label>
    {render(input, label, rest)}

    {meta.error &&
      meta.touched &&
      <span>
        {meta.error}
      </span>}
  </div>

  const RenderInput = createRenderer((input, label) =>
    <input {...input} placeholder={label} />
  )

  const RenderSelect = createRenderer((input, label, {children}) =>
    <select {...input}>
      {children}
    </select>
  )

const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  console.log("********" + states)
  return (
    <form onSubmit={handleSubmit}>
      <Field name="firstName" label="First Name" component={RenderInput} />
      <Field name="lastName" label="Last Name" component={RenderInput} />
      <Field name="email" label="Email" component={RenderInput} />
      <Field name="state" label="State" component={RenderSelect}>
        {states.map(state =>
          <option key={state} value={state}>
            {state}
          </option>
        )}
      </Field>
      <div>
        <label>Sex</label>
        <div>
          <label>
            <Field name="sex" component="input" type="radio" value="male" />
            {' '}
            Male
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="female" />
            {' '}
            Female
          </label>
        </div>
      </div>
      <div>
        <label>Favorite Color</label>
        <div>
          <Field name="favoriteColor" component="select">
            <option />
            <option value="ff0000">Red</option>
            <option value="00ff00">Green</option>
            <option value="0000ff">Blue</option>
          </Field>
        </div>
      </div>
      <div>
        <label htmlFor="employed">Employed</label>
        <div>
          <Field
            name="employed"
            id="employed"
            component="input"
            type="checkbox"
          />
        </div>
      </div>
      <div>
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea" />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'demo', // a unique identifier for this form
  validate
})(SimpleForm);
