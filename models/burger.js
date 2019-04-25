module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
      burgername: DataTypes.STRING,
      devoured: {
         type: DataTypes.BOOLEAN,
         defaultValue: false,
        }
    });
  
   
  
    return Burger;
  };
  