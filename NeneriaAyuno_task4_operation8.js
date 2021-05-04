const pool = require('./db');

pool.query(`SELECT E.first_name AS "Employee Name", 
            M.first_name AS "Manager"
            FROM employees E 
            JOIN employees M
            ON E.manager_id = M.employee_id;
`, (err, res) => {
    try {
        console.log(res.rows);
    } catch (error) {
        console.log(err.message);
    }
});

pool.end();
