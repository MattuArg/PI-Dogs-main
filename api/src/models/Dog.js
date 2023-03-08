const { Model, DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

class Dog extends Model {}

module.exports = (sequelize) => {
  // defino el modelo
  Dog.init({

    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    height: {
      type: DataTypes.INTEGER,
      allowNull: false,      
    },

    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,      
    },

    life_span: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    origin: {
      type: DataTypes.STRING
    }
    
  },{
    sequelize,
    modelName: "dog",
    updatedAt: false,
  });
};
