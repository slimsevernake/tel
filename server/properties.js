module.exports = {
	tel_db_dbUrl: (process.env.DB_HOST || "127.0.0.1") + ':27017/tel_db',
    publicPath: '../client/build',
	port: 3000,
    tokenSecret: 'Insert Your Secret Token',
    api: '/api'
}