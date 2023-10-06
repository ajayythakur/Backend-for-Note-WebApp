const express = require('express');
const login = require('../controller/loginController');
const register = require('../controller/registerController');
const notes = require('../controller/notesController');
const getNotes = require('../controller/getNotes');

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/note",notes);
router.get("/get/notes", getNotes);

module.exports =  router;