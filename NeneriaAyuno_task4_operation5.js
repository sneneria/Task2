const pool = require('./db');

pool.query(`SELECT E.first_name,E.last_name,
            D.department_name, L.city, L.state_province
            FROM employees E 
            JOIN departments D  
            ON E.department_id = D.department_id 
            JOIN locations L 
            ON D.location_id = L.location_id 
            WHERE E.first_name LIKE  '%z%';
`, (err, res) => {
    try {
        console.log(res.rows);
    } catch (error) {
        console.log(err.message);
    }
});

pool.end();
