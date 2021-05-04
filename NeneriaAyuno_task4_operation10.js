const pool = require('./db');

pool.query(`SELECT E.first_name, E.last_name, E.department_id, D.department_name 
            FROM employees E 
            LEFT OUTER JOIN departments D 
            ON E.department_id = D.department_id;
`, (err, res) => {
    try {
        console.log(res.rows);
    } catch (error) {
        console.log(err.message);
    }
});

pool.end();
