const userMainField = ['_id', 'name', 'email', 'phone', 'role', 'authToken'];

const userFullField = ['_id', 'name', 'email', 'phone', 'role', 'authToken'];

const userFieldReceivedFromFront = ['name', 'email', 'phone', 'role'];

const requiredSignUpFields = ['name', 'email', 'password'];

module.exports = {
  userMainField,
  userFullField,
  userFieldReceivedFromFront,
  requiredSignUpFields,
};
