'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Membership extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Membership.hasMany(models.User, {
        foreignKey: "membership",
        onDelete: "CASCADE",
        hooks: true
      })

      Membership.belongsToMany(models.Perk, {
        through: "MembershipPerkJoins",
        otherKey: "perkId",
        foreignKey: "membershipId"
      })
    }
  }
  Membership.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Membership',
  });
  return Membership;
};
