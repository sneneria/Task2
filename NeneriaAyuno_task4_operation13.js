const pool = require('./db');

pool.query(`SELECT department_name, first_name || ' ' || last_name AS name_of_manager 
FROM departments D 
    JOIN employees E 
    ON (D.manager_id=E.employee_id)            
`, (err, res) => {
    try {
        console.log(res.rows);
    } catch (error) {
        console.log(err.message);
    }
});

pool.end();
