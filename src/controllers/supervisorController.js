const { connect } = require('../../database/config')

const getAllSupervisors = (req, res) => {
    connect.query('SELECT * FROM employee WHERE id IN (SELECT DISTINCT supervisedby_id FROM employee)', (err, result) => {
        if (err) throw err;
        res.json(result)
    })
}

const getOneSupervisor = (req, res) => {
    const { id } = req.params
    connect.query(`SELECT * FROM employee WHERE id = ${id}`, (err, result) => {
        if (err) throw err;
        const jefe = {
            ...result[0],
            empleados: []
        }
        console.log(result)

        connect.query(`SELECT * FROM employee where supervisedby_id = ${id}`, (error, resultEmployee) => {
            if (error) throw error;
            jefe.isSupervisor = resultEmployee.length > 0 ? true : false;
            jefe.empleados = [...resultEmployee]
            res.json(jefe)
        })
    })
}

module.exports = { getAllSupervisors, getOneSupervisor }