const express = require('express');
const router = express.Router();
import User from './user';

router.get('/users', (req, res) => {
  User.find({})
    .then(user => {
      res.send(user);
    })
});

router.post('/users', (req, res) => {
  User.create(req.boby)
    .then((user) => {
      res.send(user);
    })
});

router.put('/users/:id', (req, res) => {
  user.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      User.findOne({ _id: req.params.id })
        .then(user => {
          res.send(user);
        })
    });
});

router.delete('/users/:id', (req, res) => {
  User.deleteOne({_id: req.params.id})
    .then( user => {
      res.send(user);
    })
});

module.exports = router;
