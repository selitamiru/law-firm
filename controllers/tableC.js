import connection from "../schema/database.config.js";
import tables from '../schema/tables.js'

let createTable = (req, res) => {
    connection.query(tables, (err, data, field) => {
        if (err) {
              console.log(err.message)
        }else{
            res.json('table created successfully')
          }
     });
}

export default createTable