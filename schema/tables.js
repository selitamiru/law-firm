 let registration = `CREATE TABLE IF NOT EXISTS registration(
    user_id INT AUTO_INCREMENT,
    user_first_name TEXT NOT NULL,
    user_middle_name TEXT NOT NULL,
    user_last_name TEXT NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_phone_number VARCHAR(20) NOT NULL,  
    user_password VARCHAR(255) NOT NULL,
    user_role INT NOT NULL,  
    user_street VARCHAR(255) NOT NULL,
    user_state VARCHAR(255) NOT NULL,
    user_zipcode VARCHAR(255) NOT NULL,
    user_house_number VARCHAR(255) NOT NULL,
    user_social_security VARCHAR(255) NOT NULL,  
    user_date_of_birth VARCHAR(255) NOT NULL,  
    user_marital_status VARCHAR(255) NOT NULL,
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(user_id)
)`;

export default registration