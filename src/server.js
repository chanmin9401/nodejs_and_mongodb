const express = require('express');
const mongoose = require('mongoose');
const app = express();
const { User } = require('./models/User');

const users = [];

const MONGO_URI = 'mongodb+srv://chanmin94:cksalsdl94!@mongodbtutorial.iije0.mongodb.net/BlogService?retryWrites=true&w=majority';

const server = async() => {
    try {
        await mongoose.connect(MONGO_URI, {useNewUrlParser : true, useUnifiedTopology : true});
        console.log('MongoDB connected');
        app.use(express.json());
        
        app.get('/users', async (req, res) => {
            try {
                const users = await User.find();
                return res.send({users});    
            } catch (error) {
                return res.status(500).send({error : error.message});
            }
        });
        
        app.get('/user/:userId', async (req, res) => {
            try {
                const { userId } = req.params;
                if(!mongoose.isValidObjectId(userId)) return res.status(400).send({error : "invalid userId"}); ;
                const user = await User.findOne({_id : userId});
                return res.send({user});    
            } catch (error) {
                return res.status(500).send({error : error.message});
            }
        });

        app.post('/user', async (req, res) => {
            try {
                let { username, name } = req.body;
                if(!username) return res.status(400).send({error : "username is required"});
                if(!name || !name.first || !name.last) return res.status(400).send({error : "Both fist and last names are required"});
                
                const user = new User(req.body);
                await user.save();

                return res.send({user});    
            } catch (error) {
                return res.status(500).send({error : error.message});
            }
        });
        app.delete('/user/:userId', async (req, res) => {
            try {
                const { userId } = req.params;
                if(!mongoose.isValidObjectId(userId)) return res.status(400).send({error : "invalid userId"});
                const user = await User.findOneAndDelete({_id : userId});
            } catch (error) {
                return res.status(500).send({error : error.message});
            }
        });
        app.listen(3000, () => console.log('server listening on port 3000'));    
    } catch (error) {
        console.log(error);
    }
}

server();