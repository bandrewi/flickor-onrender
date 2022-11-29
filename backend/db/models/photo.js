'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    userId: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {});
  Photo.associate = function (models) {
    Photo.belongsTo(models.User, { foreignKey: 'userId' })
    Photo.hasMany(models.Favorite, { foreignKey: 'photoId', onDelete: 'CASCADE', hooks: true })
    Photo.belongsToMany(models.Album, {
      through: 'AlbumPhotos', //could be an error in this, based on petsonality the table name is camelCase
      foreignKey: 'photoId',
      otherKey: 'albumId'
    })
  };
  return Photo;
};