import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {required, notEmpty, correctCharLength, characterType} from '../validators/complaint-validator'
import Input from './input';
import {complain} from '../actions/actions';

export class ComplaintForm extends React.Component{
  onSubmit(values) {
    return this.props.dispatch(complain(values));
  }
  render() {
    let successMessage;
    if (this.props.submitSucceeded) {
      successMessage = (
          <div className="message message-success">
              Complaint successfully submitted. We're sorry about the inconvenience.
          </div>
      );
  }

  let errorMessage;
  if (this.props.error) {
      errorMessage = (
          <div className="message message-error">{this.props.error}</div>
      );
  }
    
    return (
      <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        {successMessage}
        {errorMessage}
          <Field component={Input} type="text" element="input" name="trackingNumber" value="" id="trackingNumber" validate={[required, notEmpty, correctCharLength, characterType]} label="Tracking number"/>
          <Field component={Input} element="select" name="issue" id="issue" label="What is your issue?">
            <option value='' disabled>Please Select</option>
            <option value="not-delivered">My delivery hasn't arrived</option>
            <option value="wrong-item">The wrong item was delivered</option>
            <option value="missing-part">Part of my order was missing</option>
            <option value="damaged">Some of my order arrived damaged</option>
            <option value="other">Other (give details below)</option>
          </Field>
          <Field component={Input} type="text" element="textarea" name="details" id="details" label="Give more details (optional)"></Field>
        <button type="submit">Submit</button>
      </form>
    );
  }
}  

export default reduxForm({
  form: 'complaint',
  initialValues: { issue: "" }
})(ComplaintForm);

// QUESTION - what is type used for???? not needed for select element
// QUESTION - how do you set default value in select?
// No specific error for 