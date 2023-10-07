const { noteSchema } = require("../model/notes");

const deleteNote = async (req, res) => {

    const id = req.params.id;

    const deleteNote = await noteSchema.deleteOne({ _id: id });
    console.log(deleteNote)
    res.status(200).send({
        success : true,
        message : 'Note Deleted',
        deleteNote
    });

}
   
module.exports = deleteNote;