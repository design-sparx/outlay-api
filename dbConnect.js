const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://root:Kk32702056**@cluster0.xq2wqsf.mongodb.net/outlay-dev');

const connection = mongoose.connection;

connection.on('error', err => console.log(err));
connection.on('connected', () => console.log('MongoDB connection successful'));
