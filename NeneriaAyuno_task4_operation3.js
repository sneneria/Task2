const pool = require('./db');

pool.query(`SELECT first_name, last_name, salary, job_title
            FROM employees e 
            JOIN jobs 
                ON salary BETWEEN min_salary AND max_salary;
           
`, (err, res) => {
    try {
        console.log(res.rows);
    } catch (error) {
        console.log(err.message);
    }
});

pool.end();
