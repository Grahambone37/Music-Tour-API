'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MeetGreet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.belongsTo(models.Event, {
      //   foreignKey: 'event_id',
      //   onDelete: 'SET NULL'
      // })
    }
  }
  MeetGreet.init({
    meet_greet_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: {
      //   model: Event,
      //   key: 'event_id'
      // }
    },
    band_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    meet_greet_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'MeetGreet',
    tableName: 'meet_greets',
    timestamps: false
  });
  return MeetGreet;
};