const express = require('express');
const apiRouter = require('./server/routers/apiRouter');
var cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors())
app.use('/api', apiRouter);


app.listen(PORT, () => {
	console.log(`\n== API running on port ${PORT} ==\n`);
});