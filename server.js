const express = require('express');
const app = express();

const users = [];

app.use(express.json());

app.get('/users', function(req, res){
    return res.send({users : users});
});

app.post('/user', function(req, res){
    users.push({name : req.body.name, age : req.body.age});
    console.log(users);
    return res.send({success : true});
});

app.listen(3000, function(){
    console.log('server listening on port 3000');
});