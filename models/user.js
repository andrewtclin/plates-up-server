const bcrypt = require("bcrypt");

// get password hash
const getPasswordHash = async (password, saltRounds = 10) => {
  return await bcrypt.hash(password, saltRounds);
};

module.exports = { getPasswordHash };
