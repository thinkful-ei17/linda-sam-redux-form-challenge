export const required = value =>  
  value !== undefined ? undefined: 'This field is required';

export const notEmpty = value => 
  value.trim() !== '' ? undefined : 'This field must contain some text';

export const correctCharLength = value =>
  value.length === 5 ? undefined : 'This field must be exactly 5 characters long';

export const characterType = value => {
  console.log('what is value in validation start stmt', value);
  console.log('what is type value in validation start stmt', typeof value);
  const makeInteger = parseInt(value, 10);
  if((isNaN(makeInteger)) || (makeInteger.toString().length !== 5)){
    console.log('what is makeInteger in if stmt', makeInteger);
    console.log('what is type makeInteger in if stmt', typeof makeInteger);
    return 'This field only takes numbers'
  }
  else {
    console.log('what is makeInteger in else stmt', makeInteger);
    console.log('what is type makeInteger in else stmt', typeof makeInteger);
  return undefined
  }
}