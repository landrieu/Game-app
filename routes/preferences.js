var express = require('express');

var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://xxx:xxxx@ds139470.mlab.com:39470/mytasks-test');



//Get all characters
router.get('/characters',function(req,res,next){
    console.log("ABCD");
    db.characters.find(function(err,characters){
        if(err){
            res.send(err);
        }
        res.json(characters);
    });
});

//Get single game
router.get('/character/:username',function(req,res,next){
    
    db.characters.findOne({username:req.params.username},function(err,character){
        if(err){
            res.send(err);
        }
        res.json(character);
    });
});
/*
//Save game
router.post('/game',function(req,res,next){
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
    db.games.remove({_id: mongojs.ObjectId(req.params.id)},function(err,game){
        if(err){
            res.send(err);
        }
        res.json(game);
    });
});*/



module.exports=router;
