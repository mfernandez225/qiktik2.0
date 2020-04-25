
const userController = require("../../controllers/userController");
const User = require('../../models/User.js')
const router = require("express").Router();
// Matches with "/api/user"

// router.get('/api/users', (req,res)=>{
//   if(err) throw err
//   console.log('helklooooo')
//   res.send('hellluuuu')
// })

// router.route("/")
// .get((req,res)=>{
  
//   booksController.create
//   res.send("thisworks")


// })
  
router.route("/")
  .get(userController.create)



// router.route('/')
// .get(userController.create)
  // .get(userController.findAll)
//   .post(userController.create);

// Matches with "/api/user/:id"
// router
//   .route("/:id")
//   .get(userController.findById)
//   .put(userController.update)
//   .delete(userController.remove);

module.exports = router;
