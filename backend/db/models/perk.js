'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Perk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Perk.belongsToMany(models.Membership, {
        through: "MembershipPerkJoins",
        otherKey: "membershipId",
        foreignKey: "perkId"
      })
    }
  }
  Perk.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Perk',
  });
  return Perk;
};
