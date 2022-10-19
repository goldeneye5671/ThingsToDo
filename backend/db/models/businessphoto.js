'use strict';
module.exports = (sequelize, DataTypes) => {
  const BusinessPhoto = sequelize.define('BusinessPhoto', {
    name: DataTypes.STRING(30),
    alt: DataTypes.TEXT,
    businessId: DataTypes.INTEGER,
    url: DataTypes.TEXT
  }, {});
  BusinessPhoto.associate = function(models) {
    BusinessPhoto.belongsTo(models.Business, {
      foreignKey: "businessId"
    })

    // associations can be defined here
  };
  return BusinessPhoto;
};
