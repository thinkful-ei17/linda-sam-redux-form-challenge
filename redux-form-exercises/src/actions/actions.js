import {SubmissionError} from 'redux-form';

export const complain = values => dispatch => {
  return fetch('https://us-central1-delivery-form-api.cloudfunctions.net/api/report', {
    method: 'POST',
    body: JSON.stringify(values),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    if (!res.ok){
      if (
        res.headers.has('content-type') && 
        res.headers
          .get('content-type')
          .startsWith('application/json')
      ) {
        return res.json().then(err => Promise.reject(err));
      }
      return Promise.reject({
        code: res.status,
        message: res.statusText,
      });
    }
    return;
  })
  .then(() => console.log('Submitted with values', values))
  .catch(error => {
    if (error.reason === 'ValidationError') {
      return Promise.reject(
        new SubmissionError({
          [error.location]: error.message
          })
      );
    }
    return Promise.reject(
      new SubmissionError({
        _error: 'Could not complain at this time'
        })
    );
  });
}