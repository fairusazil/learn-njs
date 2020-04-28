var users = require('..')

module.exports = {
    deleteByID:function(req, res){
        users.splice(req.params.id-1, 1);
        res.send(users)
      }
}