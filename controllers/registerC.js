
import connection from "../schema/database.config.js"

let register = (req, res)=>{
    const { user_first_name, user_middle_name, user_last_name, user_email, user_phone_number, user_password, user_role, user_street, user_state, user_zipcode, user_house_number, user_social_security, user_date_of_birth, user_marital_status } = req.body
    let insertQuery = `INSERT INTO registration (user_first_name, user_middle_name, user_last_name, user_email, user_phone_number, user_password, user_role, user_street, user_state, user_zipcode, user_house_number, user_social_security, user_date_of_birth, user_marital_status) VALUES (?)`;  
    let values = [
      user_first_name,
      user_middle_name,
      user_last_name,
      user_email,
      user_phone_number,
      user_password,
      user_role,
      user_street,
      user_state,
      user_zipcode,
      user_house_number,
      user_social_security,
      user_date_of_birth,
      user_marital_status,
    ];
    connection.query(insertQuery, [values], (err, data, field) => {
        if (err) {
         console.log(err.message)
        } else {
            res.json('registered successfully')
     }
});

}

export default register