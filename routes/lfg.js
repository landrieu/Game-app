var express = require('express');

var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://xxx:xxxx3123@ds139470.mlab.com:39470/mytasks-test');



//Get all LFG
router.get('/lfgs',function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3002");
    db.lfg.find(function(err,lfg){
        if(err){
            res.send(err);
        }
        res.json(lfg);
    });
});


router.post('/post',function(req,res,next){
    

    var lfg  = req.body;

    console.log(req.headers);
    if(!lfg.game || !lfg.type)
    {
        res.status(400);
        res.json({
            "error" : "Bad Data"
        });
    }
    else
    {
        db.lfg.save(lfg,function(err,user){   
            if(err){
                res.send(err);
            }
            res.json(lfg);
        }); 
    }
    
});
//Get single game
/*
router.get('/character/:username',function(req,res,next){
    
    db.characters.findOne({username:req.params.username},function(err,character){
        if(err){
            res.send(err);
        }
        res.json(character);
    });
});*/


module.exports=router;
