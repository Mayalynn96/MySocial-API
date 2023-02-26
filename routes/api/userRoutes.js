const router = require('express').Router();
const {
    getAllUsers, 
    createUser,
    getUserById,
    updateUser,
    deleteUser
  } = require('../../controllers/userController');

router.route('/').get(getAllUsers).post(createUser);

router.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;