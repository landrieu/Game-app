var express = require('express');

var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://xxx:xxxx@ds139470.mlab.com:39470/mytasks-test',['games']);

//Get all games
router.get('/games',function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3002");
    db.games.find(function(err,games){
        if(err){
            res.send(err);
        }
        res.json(games);
    });
});

//Get single game
router.get('/game/:id',function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3002");
    db.games.findOne({_id: mongojs.ObjectId(req.params.id)},function(err,game){
        if(err){
            res.send(err);
        }
        res.json(game);
    });
});

//Save game
router.post('/game',function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3002");
    var game  = req.body;
    if(!game.name)
    {
        res.status(400);
        res.json({
            "error" : "Bad Data"
        });
    }
    else
    {
        db.games.save(game,function(err,game){   
            if(err){
                res.send(err);
            }
            res.json(game);
        }); 
    }
});

//Delete Game
router.delete('/game/:id',function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3002");
    db.games.remove({_id: mongojs.ObjectId(req.params.id)},function(err,game){
        if(err){
            res.send(err);
        }
        res.json(game);
    });
});



module.exports=router;
