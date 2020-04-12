/**
 * Blacklist Schema
 */
module.exports = (sequelize, DataTypes) => {
  const Blacklist = sequelize.define('Blacklist', {
      Filter: {
          type: DataTypes.TEXT,
          allowNull: false,
      },
  });

  return Blacklist;
};
