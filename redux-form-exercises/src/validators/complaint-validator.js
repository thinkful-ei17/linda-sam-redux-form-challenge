export const required = value =>  
  value !== undefined ? undefined: 'This field is required';

export const notEmpty = value => 
  value.trim() !== '' ? undefined : 'This field must contain some text';

export const correctCharLength = value =>
  value.length === 5 ? undefined : 'This field must be exactly 5 characters long';

export const characterType = value => {
  const makeInteger = parseInt(value, 10);
  if((isNaN(makeInteger)) || (makeInteger.toString().length !== 5)){
    return 'This field only takes numbers'
  }
  else {
    return undefined
  }
}