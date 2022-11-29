'use strict';
module.exports = (sequelize, DataTypes) => {
  const AlbumPhoto = sequelize.define('AlbumPhoto', {
    albumId: DataTypes.INTEGER,
    photoId: DataTypes.INTEGER
  }, {});
  AlbumPhoto.associate = function(models) {
    // associations can be defined here
  };
  return AlbumPhoto;
};