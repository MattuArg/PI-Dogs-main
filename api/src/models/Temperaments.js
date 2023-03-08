const {Model, DataTypes} = require("sequelize")

class Temperaments extends Model {}

module.exports = (sequelize) => {
    Temperaments.init({
        
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        sequelize,
        modelName: "temperaments",
        updatedAt: false,
      })

}