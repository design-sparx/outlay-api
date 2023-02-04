const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.post('/login', async (req, res) => {
	try {
		const result = await User.findOne({email: req.body.email, password: req.body.password});
		if (result) {
			res.send(result);
		} else {
			res.status(500).json('Error');
		}
	} catch (e) {
		console.log(e);
		res.status(500).json(e);
	}
});

router.post('/register', async (req, res) => {
	try {
		const newUser = new User(req.body);
		await newUser.save();
		res.send('User registered successfully.');
	} catch (e) {
		res.status(500).json(e);
	}
});

module.exports = router;
