const pool = require('./db');

pool.query(`SELECT E.first_name, E.last_name, E.salary 
                FROM employees E 
                JOIN employees S
                ON E.salary < S.salary 
                AND S.employee_id = 182;
`, (err, res) => {
    try {
        console.log(res.rows);
    } catch (error) {
        console.log(err.message);
    }
});

pool.end();
