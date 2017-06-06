console.log("FROM ROUTES JS:");

var friends = require('../controllers/friends.js');

module.exports = function(app){
// INDEX SHOW:
app.get('/friends', function(req, res) {
  friends.index(req, res);
});
// SHOW:
// app.get('/friends/:id', function(req, res) {
app.get('/friends/:id', function(req, res) {
  // console.log("SERVER ROUTES: ", req.params.id);
  friends.show(req, res);
});
// CREATE:
app.post('/friends/new', function(req, res) {
  // console.log("SERVER ROUTES: ", req.body);
  friends.create(req, res);
});
// UPDATE:
app.put('/friends/:id', function(req, res) {
  friends.update(req, res);
});
// DELETE:
app.delete('/friends/:id', function(req, res) {
  // console.log("SERVER ROUTES: ", req.params.id);
  friends.delete(req, res);
});
}
