var controller = require('../controllers/controller');

module.exports = app => {
  app.post('/api/register', controller.register);
  app.post('/api/login', controller.login);
  app.get('/api/current', controller.getCurrentUser);
  app.get('/api/current/update', controller.updateCurrentUser);
  app.post('/api/button_clicked', controller.buttonClicked);
  app.post('/api/silver', controller.silver);
  app.post('/api/gold', controller.gold);
  app.get('/api/leaderboard', controller.leaderboard);
  app.get('/logout', controller.logout);
}
