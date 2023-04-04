function routerApi(app) {
    app.use('/api/employees', require('./employeesRouter'))
    app.use('/api/supervisor', require('./supervisorRouter'))
}

module.exports = routerApi