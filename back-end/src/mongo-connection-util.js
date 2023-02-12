// import { MongoClient } from 'mongodb';

const { MongoClient } = require('mongodb');

const connectToMongoDB = async () => {
    const url = 'mongodb+srv://nlohani20:Niraj%40Mongodb@cluster0.3zzf4sv.mongodb.net/?retryWrites=true&w=majority';
    const client = await MongoClient.connect(
        url,
        { useNewUrlParser: true, useUnifiedTopology: true },
    );
    const db = client.db('garden');
    return db;
}

module.exports = { connectToMongoDB };