const express = require('express');
const usersController = require('../../controller/user.controller');
// const viewCount = require('../../middleware/viewCount');
// const limiter = require('../../middleware/limiter');
// console.log(express);

const router = express.Router()


// router.route('/:id/:test')
router.route('/all')
  .get( usersController.getAllusers)
//   .get(limiter, usersController.getAllusers)


router.route('/random')
  .get( usersController.getRandomUser)

router.route('/save') //post req
  .get( usersController.postARandomUser)



  module.exports = router; 