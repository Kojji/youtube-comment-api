/**
 * Preference Schema
 */
module.exports = (sequelize, DataTypes) => {
  const Preference = sequelize.define('Preference', {
      Type: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      Value: {
          type: DataTypes.TEXT,
          allowNull: false,
      },
  });

  return Preference;
};
