const express = require("express");
const cors = require("cors");
const mysql2 = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

const con = mysql2.createConnection({
	host: "sql12.freesqldatabase.com",
	user: "sql12786963",
	password: "yt4XcCMYLB",
	database: "sql12786963"
});

// CREATE
app.post("/ss", (req, res) => {
	let sql = "INSERT INTO student VALUES (?, ?, ?)";
	let data = [req.body.rno, req.body.name, req.body.marks];
	con.query(sql, data, (error, result) => {
		if (error) res.send(error);
		else res.send(result);
	});
});

// READ
app.get("/gs", (req, res) => {
	let sql = "SELECT * FROM student";
	con.query(sql, (error, result) => {
		if (error) res.send(error);
		else res.send(result);
	});
});

// UPDATE
app.post("/us", (req, res) => {
	let sql = "UPDATE student SET name = ?, marks = ? WHERE rno = ?";
	let data = [req.body.name, req.body.marks, req.body.rno];
	con.query(sql, data, (error, result) => {
		if (error) res.send(error);
		else res.send(result);
	});
});

// DELETE
app.delete("/ds", (req, res) => {
	let sql = "DELETE FROM student WHERE rno = ?";
	let data = [req.body.rno];
	con.query(sql, data, (error, result) => {
		if (error) res.send(error);
		else res.send(result);
	});
});

app.listen(9000, () => {
	console.log("Ready to serve @ 9000");
});
