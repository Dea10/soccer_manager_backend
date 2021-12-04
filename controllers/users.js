const { dbConnection } = require('../database/config');

const getUser = async (req, res) => {
    dbConnection.query(
        'SELECT * FROM user',
        function (err, results, fields) {
            res.json({
                msg: 'get API - controller',
                total: results.length,
                users: results
            })
        }
    );
};

const postUser = async (req, res) => {
    const { name, email, password } = req.body;

    dbConnection.query(
        `INSERT INTO user (user_name, user_email, user_password, updated_at) VALUES ("${ name }", "${ email }", "${ password }", CURRENT_TIMESTAMP)`,
        function (err, results, fields) {
            res.json({
                msg: 'post API - controller',
                users: results
            })
        }
    );
};

module.exports = { getUser, postUser }