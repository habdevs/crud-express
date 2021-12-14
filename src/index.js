"use strict"
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express')
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const mongoose = require('mongoose');

const port = 4000;


async function startServer() {
    const app = express();
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });

    await apolloServer.start();

    apolloServer.applyMiddleware({ app: app });

    app.use((req, res) => {
        res.send('Hello from express apollo server')
    });

    await mongoose.connect('mongodb+srv://anton_crud:black123@cluster0.r2mpg.mongodb.net/Cluster0?retryWrites=true&w=majority', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
    console.log('mongoose connected');

    app.listen(port, () => console.log(`server is running ${port}`));
}

startServer();


/* 
mongodb+srv://anton_crud:black123@cluster0.r2mpg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
${ process.env.MONGO_USER }
${process.env.MONGO_PASSWORD} */