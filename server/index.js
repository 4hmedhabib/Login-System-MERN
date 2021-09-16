const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();

app.use(
	cors({
		origin: 'http://localhost:3000',
		methods: [ 'GET', 'POST' ],
		credentials: true
	})
);
app.use(express.json());

const db = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'login_system'
});

app.post('/register', (req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	console.log('Your data is ', username, password);

	bcrypt.hash(password, saltRounds, (err, hash) => {
		if (err) {
			console.log(err);
		}

		db.query('INSERT INTO users (username, password) VALUES (?,?)', [ username, hash ], (err, result) => {
			if (err) {
				console.log(err);
				return;
			}
			console.log(result);
		});
	});
});

app.post('/login', (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	db.query('SELECT * FROM users WHERE username = ?;', username, (err, result) => {
		if (err) {
			res.send({ err: err });
		}

		if (result.length > 0) {
			bcrypt.compare(password, result[0].password, (error, response) => {
				if (response) {
					req.session.user = result;
					console.log(req.session.user);
					res.send(result);
				} else {
					res.send({ message: 'Wrong username/password combination!' });
				}
			});
		} else {
			res.send({ message: "User doesn't exist" });
		}
	});
});

app.listen(3001, () => {
	console.log('SERVER RUNNING PORT : 3001');
});
