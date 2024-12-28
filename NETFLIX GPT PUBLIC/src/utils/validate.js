export const checkValidateSignIn = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPawwordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/.test(password);
  if (!isEmailValid) return "Invalid Email";
  if (!isPawwordValid) return "Invalid Password";

  return null;
};
export const checkValidateSignUp = (name, email, password) => {
  const isNanmeValid = /^[a-zA-Z0-9\s]*[a-zA-Z][a-zA-Z0-9\s]*$/.test(name);
  const isEmailValid = /^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPawwordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/.test(password);

  if (!isNanmeValid) return "Invalid Name";
  if (!isEmailValid) return "Invalid Email";
  if (!isPawwordValid) return "Invalid Password";

  return null;
};
