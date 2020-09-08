const db = require('./dbConfig');

module.exports = {
	get,
	getById,
	update,
	insert,
	remove
};

//Now I need to update my Module  function to account for the fact that the user may LIMIT their results 
//So I pass in the query 
function get(query) {
	const knexQuery = db('accounts')

	if (query.limit) {
		return knexQuery.limit(query.limit)
	}
	if (query.sortby) {
		return knexQuery.orderBy(query.sortby, "desc")
	}
	else {
		return db('accounts') 
	}
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
