const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const mongoose = require('mongoose');

const { typeDefs } = require('./Schema/TypeDefs');
const { resolvers } = require('./Schema/Resolvers');

// const { rors } = require('./rors');

const PORT = process.env.PORT || 3001;

async function startServer() {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    await mongoose.connect('mongodb://localhost:27017/tel',
        { useNewUrlParser: true, useUnifiedTopology: true }
    );

    // const dbConnection = mongoose.connection;
    // dbConnection.on('error', err => console.log(`Connection error ${err}`));
    // dbConnection.once('open', () => console.log('Connected to MongoDB!'));    

    const app = express();
    await server.start();
    server.applyMiddleware({ app, path: '/api'});
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
};
startServer();


