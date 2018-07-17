const Validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validateProfileInput(data) {
  let errors = {};

  // ? mark ternary if it is not empty then: If !isEmpty is true then set data.name to data.name however if it is false it will set the data.name to empty: ""
  data.handle = !isEmpty(data.handle) ? data.handle : "";
  data.status = !isEmpty(data.status) ? data.status : "";
  data.skills = !isEmpty(data.skills) ? data.skills : "";

  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = "handle needs to be between 2 and 40 ";
  }

  if (Validator.isEmpty(data.handle)) {
    errors.handle = "Profile handle is required";
  }
  if (Validator.isEmpty(data.status)) {
    errors.status = "Status handle is required";
  }
  if (Validator.isEmpty(data.skills)) {
    errors.skills = "Skills handle is required";
  }
  if (!isEmpty(data.website)) {
    if (!Validator.isURL(data.website)) {
      errors.website = "Not a valid URL";
    }
  }
  if (!isEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      errors.website = "Not a valid URL";
    }
  }
  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.website = "Not a valid URL";
    }
  }
  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.website = "Not a valid URL";
    }
  }
  if (!isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      errors.website = "Not a valid URL";
    }
  }
  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.website = "Not a valid URL";
    }
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
