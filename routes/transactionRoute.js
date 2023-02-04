const express = require('express');
const moment = require('moment');
const Transaction = require('../models/Transactions');

const router = express.Router();

router.post('/add-transaction', async (req, res) => {
	try {
		const newTransaction = new Transaction(req.body);
		await newTransaction.save();
		res.send('Transaction saved successfully.');
	} catch (e) {
		res.status(500).json(e);
	}
});

router.post('/edit-transaction', async (req, res) => {
	try {
		await Transaction.findOneAndUpdate({_id: req.body.transactionId}, req.body.payload);
		res.send('Transaction updated successfully.');
	} catch (e) {
		res.status(500).json(e);
	}
});

router.post('/delete-transaction', async (req, res) => {
	try {
		await Transaction.findOneAndDelete({_id: req.body.transactionId});
		res.send('Transaction deleted successfully.');
	} catch (e) {
		res.status(500).json(e);
	}
});

router.post('/get-all', async (req, res) => {
	const {frequency, selectedRange, userid, type} = req.body;
	try {
		const transactions = await Transaction.find({
			...(frequency === 'custom') ? {
				date: {
					$gte: selectedRange[0],
					$lte: selectedRange[1]
				}
			} : {
				date: {
					$gt: moment().subtract(Number(frequency), 'd').toDate(),
				}
			},
			userid: userid,
			...(type !== 'all' && {type})
		});
		res.send(transactions);
	} catch (e) {
		res.status(500).json(e);
	}
});

module.exports = router;
