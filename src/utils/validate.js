const checkValidate = (email, password, name) => {
  let regexFullName = /^[A-Z][a-z]+(\s[A-Z][a-z]?){0,}/;
  if (!regexFullName.test(name)) {
    return "Invalid Name";
  }

  let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regexEmail.test(email)) {
    return "Email Not Valid";
  }

  let regexPassword =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\S+$).{8,20}$/;
  if (!regexPassword.test(password)) {
    return "Password Not Valid";
  }

  return null; // Add a return statement if both are valid
};

export default checkValidate;
