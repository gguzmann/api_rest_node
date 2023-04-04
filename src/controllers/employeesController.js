const { connect } = require('../../database/config')


const getAllEmployees = (req, res) => {
    connect.query(`
    SELECT  e1.id as id_empleado, e1.firstname as nombre_empleado, e1.lastname as apellido_empleado, e1.email as correo_empleado, e1.supervisedby_id as supervisor_empleado,
    e2.id as id_jefe, e2.firstname as nombre_jefe, e2.lastname as apellido_jefe, e2.email as correo_jefe, e2.supervisedby_id as supervisor_jefe
    from employee as e1 left join employee as e2 on e1.supervisedby_id = e2.id`
        , (err, result) => {
            if (err) throw err;
            res.json(result.map(x => {
                const empleado = {
                    id: x.id_empleado,
                    firstname: x.nombre_empleado,
                    lastname: x.apellido_empleado,
                    email: x.correo_empleado,
                    supervisedby_id: x.supervisor_empleado
                }

                if (x.id_jefe) return {
                    ...empleado,
                    jefe: {
                        id: x.id_jefe,
                        firstname: x.nombre_jefe,

                    }
                }
                return empleado

            }))
        })
}

const addEmployee = (req, res) => {
    const { firstname, lastname, email, supervisedby_id } = req.body
    connect.query(`INSERT INTO employee (firstname, lastname, email, supervisedby_id) VALUES (?, ?, ?, ?)`, [firstname, lastname, email, supervisedby_id], (err, result) => {
        if (err) res.status(500).send('Error al agregar empleado')
        res.send('empleado ingresado correctamente')
    })
}

const editEmployee = (req, res) => {
    const { id } = req.params
    const { firstname, lastname, email, supervisedby_id } = req.body
    connect.query(`UPDATE employee SET firstname = ?, lastname = ?, email = ?, supervisedby_id = ? where id = ${id}`, [firstname, lastname, email, supervisedby_id], (err, result) => {
        if (err) res.status(500).send('Error al editar empleado')
        res.send('empleado editado correctamente')
    })


}

module.exports = { getAllEmployees, addEmployee, editEmployee }