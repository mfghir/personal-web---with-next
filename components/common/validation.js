// import { t } from "i18next";

export const validation = (inpVal) => {
  const error = {};

  if (!inpVal.name.trim()) {
    error.name = "errorNameOne"
  } else if (inpVal.name.length < 2) {
    error.name = "errorNameTwo"
  } else {
    delete error.name;
  }

  if (!inpVal.email) {
    error.email = "errorEmailOne"
  } else if (!/\S+@\S+\.\S+/.test(inpVal.email)) {
    error.email = "errorEmailTwo"
  } else {
    delete error.email;
  }

  if (!inpVal.message) {
    error.message = "errorMessageOne"
  } else if (inpVal.message.length < 10 && inpVal.message === "") {
    error.message = "errorMessageTwo"
  } else {
    delete error.message;
  }

  return error;
};
