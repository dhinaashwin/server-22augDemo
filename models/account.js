const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  account: String,
});

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;
