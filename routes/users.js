var express = require('express');
var crypto = require('crypto');
var sha1 = require('sha1');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://xxx:xxxx@ds139470.mlab.com:39470/mytasks-test',['users']);
const nodemailer = require('nodemailer');

//Get all users
router.get('/users',function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3002");
    db.users.find(function(err,users){
        if(err){
            res.send(err);
        }
        res.json(users);
    });
});


//Get single user
router.get('/user/:id',function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3002");
    try {
        db.users.findOne({_id: mongojs.ObjectId(req.params.id)},function(err,user){
        if(err){
            res.send(err);
        }
        res.json(user);
    });
    } catch (error) {
        res.json(null);
    }
    
});
router.get('/user/forgot/:id',function(req,res,next){
    
});


router.get('/registration/:id',function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3002");
    db.users.findOne({_id: mongojs.ObjectId(req.params.id)},function(err,user){
        if(err){
            res.send(err);
        }
        user.valid=true;
            db.users.update({_id: mongojs.ObjectId(req.params.id)},user,{},function(err,user){
            if(err){
                res.send(err);
            }
            console.log("Registered");
            res.json("User registered");
            });
    });
});
router.get('/user/findByEmail/:email',function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3002");
    try {
        db.users.findOne({email:req.params.email},function(err,user){
        if(err){
            res.send(err);
        }
        res.json(user);
    });
        
    } catch (error) {
        res.json(null);
    }
    
});
router.post('/user/reset',function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3002");
    var user  = req.body;
    console.log(user.id);
    if(!user.email)
    {
        res.status(400);
        res.json({
            "error" : "Bad Data"
        });
    }
    else{
        try {
        
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
        mailOptions.to=user.email;
        mailOptions.html= '<p>Follow this link to reset your password: http://localhost:3005/login/forgot/'+user.id+'</p>'; // html body
        transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        });
            
        } catch (error) {
            res.json(null);
        }
        
       
    }
    //res.json(user);
});

//Save user
router.post('/user',function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3002");
    var user  = req.body;
    user.valid=false;
    if(!user.name || !user.username || !user.password || !user.email)
    {
        res.status(400);
        res.json({
            "error" : "Bad Data"
        });
    }
    else
    {
        //user.password = saltHashPassword(user.password);
        user.password = user.password;//sha1(user.password);
        db.users.save(user,function(err,user){   
            if(err){
                res.send(err);
            }
            process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
            mailOptions.to=user.email;
            mailOptions.html= '<p>Click on the link below to valid your registration: http://localhost:3005/usr/registration/'+user._id+'</p>'; // html body
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message %s sent: %s', info.messageId, info.response);
            });
            
        }); 
    }
    res.json(user);
});

//Delete User
router.delete('/user/:id',function(req,res,next){
    
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3002");
    db.users.remove({_id: mongojs.ObjectId(req.params.id)},function(err,user){
        if(err){
            res.send(err);
        }
        res.json(user);
    });
});

//Update user
router.put('/user/:id',function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3002");
    var user =req.body;
    var updUser ={};

    if(user.name)
    {
        updUser.name = user.name;
    }
    if(user.username)
    {
        updUser.username = user.username;
    }
    if(user.password)
    {
        updUser.password = user.password;
    }
    if(user.email)
    {
        updUser.email = user.email;
    }
    if(user.valid)
    {
        updUser.valid = user.valid;
    }
    if(!updUser)
    {
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    }
    else
    {
        db.users.update({_id: mongojs.ObjectId(req.params.id)},updUser,{},function(err,user){
        if(err){
            res.send(err);
        }
        res.json(user);
        });
    }
    
});

var sha512 = function(password, salt){
    var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
    hash.update(password);
    var value = hash.digest('hex');
    return {
        salt:salt,
        passwordHash:value
    };
};
var genRandomString = function(length){
    return crypto.randomBytes(Math.ceil(length/2))
            .toString('hex') /** convert to hexadecimal format */
            .slice(0,length);   /** return required number of characters */
};
function saltHashPassword(userpassword) {
    var salt = genRandomString(16); /** Gives us salt of length 16 */
    var passwordData = sha512(userpassword, salt);
    console.log('UserPassword = '+userpassword);
    console.log('Passwordhash = '+passwordData.passwordHash);
    console.log('nSalt = '+passwordData.salt);

    return passwordData.passwordHash;
}

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'lionel.andrieu@gmail.com',
        pass: 'xxxx'
    }
});
// setup email data with unicode symbols
let mailOptions = {
    from: '"GameForum Admin" <lionel.andrieu@gmail.com>', // sender address
    //to: 'lionel.andrieu@gmail.com, lio23@hotmail.fr', // list of receivers
    subject: 'Registration', // Subject line
    text: 'Hello world ?', // plain text body
    
};

module.exports=router;
