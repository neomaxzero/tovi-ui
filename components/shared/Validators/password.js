const MIN_LENGTH = 6;
const MAX_LENGTH = 15;

const validator = (pass) => {  
  if (pass.length < MIN_LENGTH || pass.length > MAX_LENGTH)  {
    return false;
    
  }

  return true;  
}

export default (pass) => 
  ({
    valid: validator(pass),
    message: 'La constraseña debe tener entre 6 y 15 caracteres',
  });