var express = require('express');
var router = express.Router();
var users = require('../../models/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(users);
});

router.delete('/:id', function(req, res){
  users.splice(req.params.id-1, 1);
  res.send(users)
})

module.exports = router;
