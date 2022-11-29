const express = require('express');
const asyncHandler = require('express-async-handler');

const { requireAuth, restoreUser } = require('../../utils/auth');
const { Favorite, Photo } = require('../../db/models');

const router = express.Router();

//Get favorite
router.get('/', requireAuth, restoreUser, asyncHandler(async (req, res) => {
    const { id: userId } = req.user
    const favorites = await Favorite.findAll({
        where: {
            userId,
        }
    })

    const favorite = await Promise.all(favorites.map(async favorite => {
        const photo = await Photo.findByPk(favorite.photoId)
        favorite.setDataValue('imageUrl', photo.imageUrl)
        favorite.setDataValue('content', photo.content)

        return favorite
    }))

    return res.json(favorite)
    //don't have to send objects in res.json()
    //for photo route all photo(s) were sent as json so thats why they were nested
    //and had to key in multiple times
}))

//Create favorite
router.post('/new', requireAuth, restoreUser, asyncHandler(async (req, res) => {
    const { id } = req.user;
    const { photoId } = req.body;

    const favorite = await Favorite.create({
        userId: id,
        photoId
    })

    return res.json(favorite)
}))

//Delete favorite
router.delete('/:id(\\d+)/delete', requireAuth, asyncHandler(async (req, res) => {
    const id = req.params.id
    const favorite = await Favorite.findByPk(id)

    await favorite.destroy();

    return res.json({ message: 'success' })
}))

module.exports = router