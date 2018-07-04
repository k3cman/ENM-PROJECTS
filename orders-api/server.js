const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.port || 3000;
const router = express.Router();

app.use("/", router);

const con = mysql.createConnection({
  //MYSQL SETTINGS
});

router.get("/api", (req, res, next) => {
  con.connect(err => {
    if (err) throw err;
    con.query("SELECT * FROM orders where id=10", (err, result, fields) => {
      if (err) throw err;
      res.send(
        JSON.stringify({
          Name: result.first_name + result.last_name,
          id: result.id
        })
      );
    });
  });
});

router.get("/api/june", (req, res, next) => {
  con.connect(err => {
    if (err) throw err;
    con.query(
      "SELECT first_name,last_name,cart,id FROM orders where created_at<='2018-06-10 00:01:00' and created_at>='2018-06-01 00:01:00' and language_id=1",
      (err, result, fields) => {
        if (err) throw err;
        res.send(
          JSON.stringify({
            status: 200,
            error: null,
            response: result
          })
        );
      }
    );
  });
});

app.listen(port, () => console.log("express server runing"));
