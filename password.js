//function, which validates if the password contains min. 8 characters, 1 upper-case letter and 1 number

function validatePass(passw) {
  if (passw.length < 8) {
    return "Minimal length of the password is 8 characters.";
  }
  let isUpperCase = false;
  let charIsNumber = false;

  for (let i = 0; i < passw.length; i++) {
    if (isNaN(passw[i]) === false) {
      charIsNumber = true;
    } else if (passw[i] === passw[i].toUpperCase()) {
      isUpperCase = true;
    }
  }
  if (!isUpperCase) {
    return "What about upper-case letters?";
  }
  if (!charIsNumber) {
    return "You forgot to add at least one number";
  }
  return "DONE!";
}

validatePass("passs1sfdgfS")
