import {SubmissionError} from 'redux-form';

export const complain = values => dispatch => {
  return fetch('', {
    method: 'POST',
    body: JSON.stringify(values),
    headers: {

    }
  })
  .then(res => {
    if (!res.ok){
      if (
        res.headers.has('') && 
        res.headers
          .get('')
          .startsWith('')
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