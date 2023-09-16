import connection from "../schema/database.config.js";

let getAllUsers = (req, res) => {
    let getQuery = `SELECT * FROM registration`;
    connection.query(getQuery, (err, data, field) => {
        if (err) {
           console.log(err.message)
        } else {
            res.json(data)
       }
   })
}

export default getAllUsers
