import express from 'express';
const path = require('path');

const app = express()
const port = 3001

// app.get('/', (req, res) => {
// 	res.send('Hello World!')
// })

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})