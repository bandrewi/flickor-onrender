'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING
  }, {});
  Album.associate = function (models) {
    Album.belongsTo(models.User, { foreignKey: 'userId' })
    Album.belongsToMany(models.Photo, {
      through: 'AlbumPhotos', //could be an error in this, based on petsonality the table name is camelCase
      foreignKey: 'albumId',
      otherKey: 'photoId'
    })
  };
  return Album;
};