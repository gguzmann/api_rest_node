const express = require('express')
const { connect } = require('../../database/config')
const { getAllEmployees, addEmployee, editEmployee } = require('../controllers/employeesController')

const routes = express.Router()

// Mostrar todos los empleados y nombre e id de jefe
routes.get('/', getAllEmployees)

// Nuevo empleador
routes.post('/', addEmployee)

// Editar empleado
routes.put('/:id', editEmployee)


module.exports = routes