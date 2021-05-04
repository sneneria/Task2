const pool = require('./db');

pool.query(`SELECT e.first_name,e.last_name, 
            d.department_name, l.city, l.state_province
            FROM employees e 
            JOIN departments d  
            ON E.department_id = d.department_id  
            JOIN locations l
            ON d.location_id = l.location_id;
`, (err, res) => {
    try {
        console.log(res.rows);
    } catch (error) {
        console.log(err.message);
    }
});

pool.end();
