module.exports = {
    db: {
        dialect: 'mysql',
        host: 'localhost',
        database: 'mydb',
        username: 'root',
        password: '941109'
    },
    middleware: ['logger'] // 以数组形式，保证执⾏顺序
}