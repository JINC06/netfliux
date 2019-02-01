import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import User from  './src/schemas/user';
import Genre from './src/schemas/genres';
import Rating from './src/schemas/ratings';
import cors from 'cors';
import { createToken } from './src/resolvers/create';
import { verifyToken } from './src/resolvers/verify';

import schema from './src/graphql';
import graphqlHTTP from 'express-graphql';

const JsonParser  = bodyParser.json();
const app = express();
const PORT = process.env.PORT || 6430;


mongoose.connect("mongodb://admin:admin1@ds211865.mlab.com:11865/elennio");

const DB = mongoose.connection;

DB.on('error', () => console.log('Failed to connected to mongoDB'))
    .once('open', () => console.log('Connected to MongoDB'));

app.listen(PORT, () => { console.log('Magic happens in port ' + PORT) });

app.use((cors()));

app.post('/addUser', (req,res) => {
    var user = new User({
        "name": "Walter",
        "lastName": "White",
        "email": "Heisenberg@meth.com",
        "password": "ilovejosse",
        "phone": "6221002760",
        "address": "Negra Arroyo Lane 8"
    });

    user.save((err)=> {
        if(err) throw err;
        res.send('Usuario creado');
    });
});

app.post('/addGenre', (req,res) => {
    var genre = new Genre({
        "name": "Supenso",
        "description": "Miedo o terror"
    });

    genre.save((err) => {
        if(err) throw err;
        res.send('Genero creado');
    });
});

app.post('/addRating', (req,res) => {
    var rating = new Rating({
        "name": "B",
        "description": "Adolescente",
        "age": 13
    });

    rating.save((err) => {
        if(err) throw err;
        res.send('Clasificación creada');
    });
});


app.get('/userList', (req, res) => {
    User.find({}).then(function(users){
        res.send(users);
    });
});

app.post('/register', JsonParser, (req, res) => {
    var user = new User(req.body);
    console.log(user);

    user.save((err) => {
        if(err) throw err;
        res.send('Usuario registrado');
    }); 
});

app.use('/login', JsonParser, (req,res)=>{
    if(req.method === 'POST'){
        const token = createToken(req.body.email, req.body.password).then((token)=>{
            res.status(200).json({token});
        })
        .catch((err)=>{
            console.log(err)
            res.status(403).json({
                message: 'Login Failed INVALID CREDENTIALS'
            })
        })
    }

});


app.use('/verifyToken', JsonParser, (req, res) => {
    if(req.method === 'POST') {
        try{
            const token = req.headers['authorization'];
            console.log(token);
            verifyToken(token)
            .then(user => {
                res.status(200).json({user});
            })
            .catch(err => {
                console.log(err);
            });
        }catch(e){
            res.status(201).json({
                message: e.message
            });
        }
    }
});

app.use('/graphql', (req,res,next) => {
    const token = req.headers['authorization']
    try{
        req.user = verifyToken(token)
        next()
    }catch(err){
        res.status(401).json({message: err.message})
    }
})

app.use('/graphql', graphqlHTTP((req, res) => ({
    schema,
    graphiql: true,
    pretty: true,
    context: {
        user: req.user
    }
})))
