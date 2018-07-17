const Validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validatePostInput(data) {
  let errors = {};

  // ? mark ternary if it is not empty then: If !isEmpty is true then set data.name to data.name however if it is false it will set the data.name to empty: ""
  data.description = !isEmpty(data.description) ? data.description : "";

  if (Validator.isEmpty(data.description)) {
    errors.description = "Description is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
