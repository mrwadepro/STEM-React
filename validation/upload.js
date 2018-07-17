const Validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validateUpload(data) {
  let errors = {};

  // ? mark ternary if it is not empty then: If !isEmpty is true then set data.name to data.name however if it is false it will set the data.name to empty: ""
  data.description = !isEmpty(data.description) ? data.description : "";
  data.key = !isEmpty(data.key) ? data.key : "";
  data.owner = !isEmpty(data.owner) ? data.owner : "";

  if (Validator.isEmpty(data.description)) {
    errors.description = "Description is required";
  }
  if (Validator.isEmpty(data.key)) {
    errors.key = "Key is required";
  }
  if (Validator.isEmpty(data.owner)) {
    errors.owner = "Owner field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
