import React from 'react';
import {reduxForm, Field} from 'redux-form';

export class ComplaintForm extends React.Component{
  render() {
    return (
      <form>
        <div className="form-input">
          <label htmlFor="trackingNumber">Tracking number</label>
          <Field component="input" name="trackingNumber" value="" id="trackingNumber"/>
        </div>
        <div className="form-input">
          <label htmlFor="issue">What is your issue?</label>
          <Field component="select" name="issue" id="issue">
            <option value="not-delivered">My delivery hasn't arrived</option>
            <option value="wrong-item">The wrong item was delivered</option>
            <option value="missing-part">Part of my order was missing</option>
            <option value="damaged">Some of my order arrived damaged</option>
            <option value="other">Other (give details below)</option>
          </Field>
        </div>
        <div className="form-input">
          <label htmlFor="details">Give more details (optional)</label>
          <textarea name="details" id="details"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}  

export default reduxForm({
  form: 'complaint'
})(ComplaintForm);