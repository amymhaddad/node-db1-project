const express = require('express');
const router = express.Router();
const Account = require('../data/accountsModel');
const { validateUserId, validateAccountDetails } = require('../middlewares/Middlewares');

router.get('/', (req, res) => {
	Account.get()
		.then((accounts) => {
			return res.status(200).json(accounts);
		})
		.catch((error) => {
			return res.status(500).json({ error: 'Server Error' });
		});
});

//Get a specific account; return an array of objects selected from the database.
router.get('/:accountId', validateUserId, (req, res) => {
	Account.getById(req.params.accountId)
		.then((account) => {
			if (!account) return res.status(404).json({ error: 'Account ID is not found ' });
			return res.status(200).json(account);
		})
		.catch((error) => {
			return res.status(500).json({ error: 'Server Error' });
		});
});

//Update one or more fields in the accounts table; return array of all the updated rows
router.put('/:accountId', [ validateUserId, validateAccountDetails ], (req, res) => {
	Account.update(req.params.accountId, req.body)
		.then((updatedRow) => {
			if (!updatedRow) return res.status(404).json({ error: 'Account ID is not found ' });
			return res.status(201).json(updatedRow);
		})
		.catch((error) => {
			return res.status(500).json({ error: 'Server Error' });
		});
});

//remove an acccount; returns the number of affected rows for the query.
router.delete('/:accountId', validateUserId, (req, res) => {
	Account.remove(req.params.accountId)
		.then((count) => {
			if (!count) return res.status(404).json({ error: 'Account ID is not found ' });
			return res.sendStatus(204);
		})
		.catch((error) => {
			return res.status(500).json({ error: 'Server Error' });
		});
});

//Add a new account; returns an array of all the added rows with specified columns
router.post('/', validateAccountDetails, (req, res) => {
	Account.insert(req.body)
		.then((newAccount) => {
			return res.status(201).json(newAccount);
		})
		.catch((error) => {
			return res.status(500).json({ error: 'Server Error' });
		});
});

module.exports = router;
