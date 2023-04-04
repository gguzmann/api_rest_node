const express = require('express')
const { connect } = require('../../database/config')
const { getAllSupervisors, getOneSupervisor } = require('../controllers/supervisorController')

const routes = express.Router()

// Mostrar todos los supervisores
routes.get('/', getAllSupervisors)

// Mostrar supervisor por ID y empleados supervisados
routes.get('/:id', getOneSupervisor)

module.exports = routes