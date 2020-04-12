
/**
 * User Schema
 */
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        DisplayName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        ClientId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ApiKey: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    return User;
};
