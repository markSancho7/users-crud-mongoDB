const { mongoose } = require('mongoose');
const UserScheme = mongoose.Schema(
  {
    _id: String,
    name: String,
    email: String,
  },
  {
    colection: 'users',
  }
);

module.exports = UserScheme;
