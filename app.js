const express = require('express');
const apiRouter = require('./routers/apiRouter');

const app = express();
const PORT = process.env.PORT || 5000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', apiRouter);

app.listen(PORT, () => {
	console.log(`\n== API running on port ${PORT} ==\n`);
});
