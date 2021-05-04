const pool = require('./db');

pool.query(`SELECT job_title, AVG(salary) 
            FROM employees 
            NATURAL JOIN jobs 
            GROUP BY job_title;
`, (err, res) => {
    try {
        console.log(res.rows);
    } catch (error) {
        console.log(err.message);
    }
});

pool.end();
