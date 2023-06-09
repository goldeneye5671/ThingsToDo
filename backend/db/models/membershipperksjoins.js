'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MembershipPerksJoins extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MembershipPerksJoins.init({
    membershipId: DataTypes.INTEGER,
    perkId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MembershipPerksJoins',
  });
  return MembershipPerksJoins;
};
