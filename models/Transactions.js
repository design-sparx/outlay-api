const mongoose = require('mongoose');

const transactionsSchema = new mongoose.Schema({
	amount: {type: Number, required: true},
	type: {type: String, required: true},
	category: {type: String, required: true},
	date: {type: Date, required: true},
	reference: {type: String, required: true},
	description: {type: String, required: true},
	userid: {type: String, required: true},
});

const transactionsModel = mongoose.model('Transaction', transactionsSchema);

module.exports = transactionsModel;
