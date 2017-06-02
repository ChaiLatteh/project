var mongoose = require('mongoose');

var User = mongoose.model('User');

module.exports = {
  register: (req, res)=>{
    User.findOne({username:req.body.username},(err,user)=>{
      if(user==null){
        let newUser = new User(req.body);
        newUser.save((err, savedUser)=>{
          if(err){
            console.log(err);
            return res.sendStatus(500);
          }
          else{
            return res.json(savedUser);
          }
        })
      }
      else{
        return res.status(500).send("Entered username already exists.");
      }
    })
  },
  login: (req, res)=>{
    User.findOne({username:req.body.username}, function(err, user){
      if(err){
        console.log(err);
        return res.status(500).send("Something went wrong.");
      }
      if(!user){
        return res.status(404).send("Username or Password does not match.");
      }
      user.comparePassword(req.body.password, function(err, isMatch){
        if(isMatch == true){
          req.session.user = user;
          res.json(user);
        }
        else{
          return res.status(401).send("Password does not match.")
        }
      })
    })
  },
  getCurrentUser: (req, res) => {
    if(!req.session.user){
      return res.status(401).send("No user in session");
    }
    else{
      return res.json(req.session.user);
    }
  },
  updateCurrentUser: (req, res)=>{
    User.findOne({username:req.session.user.username}, (err, user)=>{
      if(err){
        console.log(err);
        return res.status(500).send();
      }
      else{
        res.json(user);
      }
    })
  },
  buttonClicked: (req, res)=>{
    User.findOne({username:req.session.user.username}, (err, user)=>{
      if(err){
        console.log(err);
        return res.status(500).send("ERROR");
      }
      else{
        if(user.pickaxe=="bronze"){
          user.gold+=1;
        }
        else if(user.pickaxe=="silver"){
          user.gold+=2;
        }
        else if(user.pickaxe=="gold"){
          user.gold+=3;
        }
        user.total_clicks+=1;
        user.save((err, user)=>{
          if(err){
            console.log(err);
            return res.status(500).send("Could not save gold");
          }
          else{
            res.json(user);
          }
        })
      }
    })
  },
  silver: (req, res)=>{
    User.findOne({username:req.session.user.username}, (err, user)=>{
      if(user.gold<250){
        return res.status(500).send("You don't have 500 gold to spend.");
      }
      user.gold=user.gold-250;
      user.pickaxe="silver";
      user.save((err, user)=>{
        if(err){
          console.log(err);
          return res.status(500).send("Could not upgrade pickaxe");
        }
        else{
          res.json(user);
        }
      })
    })
  },
  gold: (req, res)=>{
    User.findOne({username:req.session.user.username}, (err, user)=>{
      if(user.gold<500){
        return res.status(500).send("You don't have 1500 gold to spend.");
      }
      user.gold=user.gold-500;
      user.pickaxe="gold";
      user.save((err, user)=>{
        if(err){
          console.log(err);
          return res.status(500).send("Could not upgrade pickaxe");
        }
        else{
          res.json(user);
        }
      })
    })
  },
  leaderboard: (req, res)=>{
    User.find((err,users)=>{
      if(err){
        console.log(err);
        return res.status(500).send("Error getting users list");
      }
      else{
        return res.json(users);
      }
    }).sort({gold:-1})
  },
  logout: (req, res)=>{
    req.session.destroy();
    res.redirect('/login');
  },
  //NEW METHOD HERE
}
