module.exports = {
	validateUserId,
	validateAccountDetails
};

function validateUserId(req, res, next) {
	const accountId = req.params.accountId;
	if (isNaN(accountId)) return res.status(400).json({ error: 'Invalid syntax' });
	next();
}

function validateAccountDetails(req, res, next) {
	if (!req.body.name && !req.body.budget)
		return res.status(400).json({ Message: 'You must provide a name or budget' });
	next();
}
