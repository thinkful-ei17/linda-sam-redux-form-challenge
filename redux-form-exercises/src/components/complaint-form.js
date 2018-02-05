import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {required, notEmpty, correctCharLength, characterType} from '../validators/complaint-validator'
import Input from './input';
import {complain} from '../actions/actions';

export class ComplaintForm extends React.Component{
  onSubmit(values) {
    console.log('what is value for onSubmit', values);
    //return this.props.dispatch(complain(values));
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
          <Field component={Input} type="text" element="input" name="trackingNumber" value="" id="trackingNumber" validate={[required, notEmpty, characterType, correctCharLength]} label="Tracking number"/>
          <Field component={Input} type="select" element="select" name="issue" id="issue" label="What is your issue?">
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
  form: 'complaint'
})(ComplaintForm);

//QUESTION - what is type used for???? not needed for select element