const router = require("express").Router();
const bookController = require("../../controller/bookController");

// Matches with "/api/books"
router.route("/")
  .get(bookController.findAll).then(err => console.log(err))
  .post(bookController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .delete(bookController.remove);

module.exports = router;
