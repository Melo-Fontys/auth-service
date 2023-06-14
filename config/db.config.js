module.exports = {
    HOST: "0.0.0.0",
    USER: "me",
    PASSWORD: "password",
    DB: "api",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};