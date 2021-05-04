const pool = require('./db');

pool.query(`SELECT D.department_name , L.city , L.state_province
            FROM  departments D 
            JOIN locations L 
            ON  D.location_id = L.location_id;
`, (err, res) => {
    try {
        console.log(res.rows);
    } catch (error) {
        console.log(err.message);
    }
});

pool.end();
