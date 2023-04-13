const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'Pokemon',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false
      },
      hp: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      attack: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      deffence: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      velocity: {
        type: DataTypes.INTEGER
      },
      height: {
        type: DataTypes.INTEGER
      },
      weight: {
        type: DataTypes.INTEGER
      },
    },
    {
      timestamps: false,
    }
  );
};
