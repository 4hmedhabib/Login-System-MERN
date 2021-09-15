const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

const db = mysql
	.createPool({
		host: 'localhost',
		user: 'root',
		database: 'login-system',
		waitForConnections: true,
		connectionLimit: 10,
		queueLimit: 0
	})
	.then(() => {
		console.log('DATABASE CONNECTION SUCCESSFULLY!');
	})
	.catch((err) => {
		console.log('DATABASE CONNECTION ERROR ====================', err);
	});

app.use(cors());

app.listen(3001, () => {
	console.log('SERVER RUNNING PORT: 3001');
});
