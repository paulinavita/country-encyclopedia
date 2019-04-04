// const {OAuth2Client} = require('google-auth-library');
// const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
// const User = require('../models/user')
// var jwt = require('jsonwebtoken');

class UserController {
  signInGoogle() {
    client.verifyIdToken({
      idToken: req.body.id_token,
      audience: process.env.CLIENT_ID
    })
      .then(ticket => {
        const payload = ticket.getPayload();
        const userid = payload['sub'];
        return User.findOne({ email: payload.email })
      })
      .then(user => {
        if(!user) {
          User.create({
            email: payload,
            name: payload.name
          })
          jwt.sign({
            email: payload.email,
            name: payload.name
          }, process.env.SECRET_KEY)
        } else {
          jwt.sign({
            email: payload.email,
            name: payload.name
          }, process.env.SECRET_KEY)
        }
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
}

module.exports = UserController