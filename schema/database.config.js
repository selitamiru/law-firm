import mysql from "mysql2";
import dotenv from "dotenv";

let connection = mysql.createConnection({
  host: "localhost",
  database: "lawFirm",
  user: "lawFirmAdmin",
    password: "lawFirm@1234",
  port: 8889
});

export default connection;
