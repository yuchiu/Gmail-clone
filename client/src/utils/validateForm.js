import Validator from "validator";

export default {
  login: data => {
    const clientErrors = {};
    if (!data.username) {
      clientErrors.username = "Username can't be blank";
    } else if (data.username.length < 4 || data.username.length > 32) {
      clientErrors.username = "Length of user name have to be between 4 to 32";
    } else if (!/^[a-z0-9]+$/i.test(data.username)) {
      clientErrors.username =
        "only number and characters, special characters and space are not allowed";
    }
    if (!data.password) {
      clientErrors.password = "Password can't be blank";
    } else if (data.password.length < 4 || data.password.length > 32) {
      clientErrors.password = "Length of user name have to be between 4 to 32";
    }
    return clientErrors;
  },

  register: data => {
    const clientErrors = {};
    if (!data.username) {
      clientErrors.username = "Username can't be blank";
    } else if (data.username.length < 4 || data.username.length > 32) {
      clientErrors.username = "Length of user name have to be between 4 to 32";
    } else if (!/^[a-z0-9]+$/i.test(data.username)) {
      clientErrors.username =
        "only number and characters, special characters and space are not allowed";
    }
    if (!data.password) {
      clientErrors.password = "Password can't be blank";
    } else if (data.password.length < 4 || data.password.length > 32) {
      clientErrors.password = "Length of password have to be between 4 to 32";
    }
    if (!data.confirmPassword) {
      clientErrors.confirmPassword = "Confirm password can't be blank";
    } else if (data.password !== data.confirmPassword) {
      clientErrors.confirmPassword =
        "Password and confirm password have to be the same";
    }
    if (!data.email) {
      clientErrors.email = "Email can't be blank";
    } else if (!Validator.isEmail(data.email)) {
      clientErrors.email = "Invalid email";
    }
    return clientErrors;
  }
};
