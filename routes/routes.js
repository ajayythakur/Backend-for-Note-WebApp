const express = require('express');
const login = require('../controller/loginController');
const register = require('../controller/registerController');
const notes = require('../controller/notesController');
const getNotes = require('../controller/getNotes');
const deleteNote = require('../controller/deleteNote');
const updateNote = require('../controller/updateNote');


const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/note",notes);
router.get("/get/notes", getNotes);
router.patch("/delete/:id", deleteNote )
router.put("/update/note/:id/:newTitle/:newDes",updateNote)

module.exports =  router;