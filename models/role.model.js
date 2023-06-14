module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("roles", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            field: 'id'
        },
        name: {
            type: Sequelize.STRING,
            field: 'name'
        }
    });

    return Role;
};
