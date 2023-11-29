const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Issue extends Model {}

Issue.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
    title: {
        type: DataTypes.STRING,
        allowNull: false
      },
    description: {
        type: DataTypes.STRING,
        allowNull: false
      },
    image_url: {
        type: DataTypes.STRING,
        allowNull: false
      },
    location: {
        type: DataTypes.STRING,
        allowNull: false
      },
    state: {
        type: DataTypes.STRING,
        allowNull: false
      },
  },
  {
    sequelize
  }
);

module.exports = Issue;