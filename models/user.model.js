module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        username: {
            type: Sequelize.STRING,
            field: 'username'
        },
        email: {
            type: Sequelize.STRING,
            field: 'email'
        },
        password: {
            type: Sequelize.STRING,
            field: 'password'
        }
    });

    return User;
};
