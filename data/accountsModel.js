const db = require('./dbConfig');

module.exports = {
	get,
	getById,
	update,
	insert,
	remove
};

function get() {
	return db('accounts');
}

function getById(id) {
	return db('accounts')
	.where({ id }).first();
}

function update(id, accountDetail) {
	return db('accounts')
	.where({ id })
	.update(accountDetail).then((count) => {
		if (count > 0) {
			return getById(id);
		}
		return null;
	});
}

function remove(id) {
	return db('accounts')
	.where({ id }).del();
}

function insert(newAccount) {
	return db('accounts')
	.insert(newAccount).then((id) => {
		return getById(id[0]);
	});
}
