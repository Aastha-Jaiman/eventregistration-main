const express = require("express");
const { registerUser, searchAndFilterUsers } = require("../controllers/userController");
const router = express.Router();

router.post("/register", registerUser);
router.get("/search/users", searchAndFilterUsers);

module.exports = router;
