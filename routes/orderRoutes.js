const express = require('express');
const Account = require('../models/account');
const router = express.Router();

router.post('/check-user', async (req, res) => {
  const { email } = req.body;

  try {
    const user = await Account.findOne({ account: email });

    if (user) {
      return res.status(200).json({ exists: true, user });
    } else {
      return res.status(404).json({ exists: false });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
