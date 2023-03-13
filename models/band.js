// DEPENDENCIES
const { Sequelize, DataTypes, Model } = require('sequelize')
// require('dotenv').config()
const sequelize = new Sequelize(process.env.PG_URI)

// MODEL
class Band extends Model { }
Band.init({
    // column configuration here
    band_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    band_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    band_members: DataTypes.STRING,
    band_songs: DataTypes.STRING
}, {
    // extra options here
    sequelize,
    modelName: 'Band',
    tableName: 'bands',
    timestamps: false
})

// EXPORT
module.exports = Band