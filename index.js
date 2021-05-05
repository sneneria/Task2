const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// middleware
app.use(cors());
app.use(express.json());


// Server Routes
app.get("/NeneriaAyuno_task4_1", async (req, res) => {
    try {
        const sql = `SELECT e.first_name , e.last_name , 
        e.department_id , D.department_name 
        FROM employees e 
        JOIN departments d 
        ON e.department_id = d.department_id;
    `;
        const task4 = await pool.query(sql);
        res.json(task4);
        //console.log(task4);
    } catch (err) {
        console.error(err.message);

    }
});
app.get("/NeneriaAyuno_task4_2", async (req, res) => {
    try {
        const sql = `SELECT e.first_name,e.last_name, 
        d.department_name, l.city, l.state_province
        FROM employees e 
        JOIN departments d  
        ON E.department_id = d.department_id  
        JOIN locations l
        ON d.location_id = l.location_id;
    `;
        const task4 = await pool.query(sql);
        res.json(task4);
        //console.log(task4);
    } catch (err) {
        console.error(err.message);

    }
});
app.get("/NeneriaAyuno_task4_3", async (req, res) => {
    try {
        const sql = `SELECT e.first_name, e.last_name, e.salary, j.job_title
        FROM employees e
        JOIN jobs j
        ON e.salary BETWEEN j.min_salary AND j.max_salary;
    `;
        const task4 = await pool.query(sql);
        res.json(task4);
        //console.log(task4);
    } catch (err) {
        console.error(err.message);

    }
});
app.get("/NeneriaAyuno_task4_4", async (req, res) => {
    try {
        const sql = `SELECT e.first_name , e.last_name , 
        e.department_id ,  d.department_name 
        FROM employees e 
        JOIN departments d 
        ON e.department_id = d.department_id 
        AND e.department_id IN (80 , 40)
        ORDER BY e.last_name;
    `;
        const task4 = await pool.query(sql);
        res.json(task4);
        //console.log(task4);
    } catch (err) {
        console.error(err.message);

    }
});

app.get("/NeneriaAyuno_task4_5", async (req, res) => {
    try {
        const sql = `SELECT E.first_name,E.last_name,
        D.department_name, L.city, L.state_province
        FROM employees E 
        JOIN departments D  
        ON E.department_id = D.department_id 
        JOIN locations L 
        ON D.location_id = L.location_id 
        WHERE E.first_name LIKE  '%z%';
    `;
        const task4 = await pool.query(sql);
        res.json(task4);
        //console.log(task4);
    } catch (err) {
        console.error(err.message);

    }
});
app.get("/NeneriaAyuno_task4_6", async (req, res) => {
    try {
        const sql = `SELECT E.first_name, E.last_name, D.department_id, D.department_name 
        FROM employees E 
        RIGHT OUTER JOIN departments D
        ON E.department_id = D.department_id;
    `;
        const task4 = await pool.query(sql);
        res.json(task4);
        //console.log(task4);
    } catch (err) {
        console.error(err.message);

    }
});

app.get("/NeneriaAyuno_task4_7", async (req, res) => {
    try {
        const sql = `SELECT E.first_name, E.last_name, E.salary 
        FROM employees E 
        JOIN employees S
        ON E.salary < S.salary 
        AND S.employee_id = 182;
    `;
        const task4 = await pool.query(sql);
        res.json(task4);
        //console.log(task4);
    } catch (err) {
        console.error(err.message);

    }
});

app.get("/NeneriaAyuno_task4_8", async (req, res) => {
    try {
        const sql = `SELECT E.first_name AS "Employee Name", 
        M.first_name AS "Manager"
        FROM employees E 
        JOIN employees M
        ON E.manager_id = M.employee_id;
    `;
        const task4 = await pool.query(sql);
        res.json(task4);
        //console.log(task4);
    } catch (err) {
        console.error(err.message);

    }
});

app.get("/NeneriaAyuno_task4_9", async (req, res) => {
    try {
        const sql = `SELECT D.department_name , L.city , L.state_province
        FROM  departments D 
        JOIN locations L 
        ON  D.location_id = L.location_id;
    `;
        const task4 = await pool.query(sql);
        res.json(task4);
        //console.log(task4);
    } catch (err) {
        console.error(err.message);

    }
});

app.get("/NeneriaAyuno_task4_10", async (req, res) => {
    try {
        const sql = `SELECT E.first_name, E.last_name, E.department_id, D.department_name 
        FROM employees E 
        LEFT OUTER JOIN departments D 
        ON E.department_id = D.department_id;
    `;
        const task4 = await pool.query(sql);
        res.json(task4);
        //console.log(task4);
    } catch (err) {
        console.error(err.message);

    }
});
app.get("/NeneriaAyuno_task4_11", async (req, res) => {
    try {
        const sql = `SELECT E.first_name AS "Employee Name",
        M.first_name AS "Manager"
        FROM employees E 
        LEFT OUTER JOIN employees M
        ON E.manager_id = M.employee_id;
    `;
        const task4 = await pool.query(sql);
        res.json(task4);
        //console.log(task4);
    } catch (err) {
        console.error(err.message);

    }
});

app.get("/NeneriaAyuno_task4_12", async (req, res) => {
    try {
        const sql = `SELECT department_name, AVG(salary), COUNT(commission_pct) 
        FROM departments 
        JOIN employees USING (department_id) 
        GROUP BY department_name;
    `;
        const task4 = await pool.query(sql);
        res.json(task4);
        //console.log(task4);
    } catch (err) {
        console.error(err.message);

    }
});

app.get("/NeneriaAyuno_task4_13", async (req, res) => {
    try {
        const sql = `SELECT department_name, first_name || ' ' || last_name AS name_of_manager 
        FROM departments D 
            JOIN employees E 
            ON (D.manager_id=E.employee_id)            
        `;
        const task4 = await pool.query(sql);
        res.json(task4);
        //console.log(task4);
    } catch (err) {
        console.error(err.message);

    }
});
app.get("/NeneriaAyuno_task4_14", async (req, res) => {
    try {
        const sql = `SELECT job_title, AVG(salary) 
        FROM employees 
        NATURAL JOIN jobs 
        GROUP BY job_title;
    `;
        const task4 = await pool.query(sql);
        res.json(task4);
        //console.log(task4);
    } catch (err) {
        console.error(err.message);

    }
});
app.get("/NeneriaAyuno_task4_15", async (req, res) => {
    try {
        const sql = `SELECT country_name,city, COUNT(department_id)
        FROM countries 
            JOIN locations USING (country_id) 
            JOIN departments USING (location_id) 
        WHERE department_id IN 
        (SELECT department_id 
            FROM employees 
        GROUP BY department_id 
        HAVING COUNT(department_id)>=2)
        GROUP BY country_name,city;
    `;
        const task4 = await pool.query(sql);
        res.json(task4);
        //console.log(task4);
    } catch (err) {
        console.error(err.message);

    }
});


app.listen(3000, () => {
    console.log("server has started on port localhost:5000");
});