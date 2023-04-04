function routerApi(app) {
    app.use('/api/employee', require('./employeesRouter'))
    app.use('/api/supervisor', require('./supervisorRouter'))
}

module.exports = routerApi