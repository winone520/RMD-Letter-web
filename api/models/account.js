const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const Account = new Schema({
  username: { type: String, unique: true, required: true, index: true },
  displayName: { type: String, required: true },
  email: {
    type: String,
    validate: {
      validator(email) {
        return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
      },
      message: '{VALUE} is not a valid email!',
    },
    unique: true,
    required: true,
  },
  gravatar: String,
  type: String
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('accounts', Account);

