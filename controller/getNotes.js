const { noteSchema } = require("../model/notes")

const getNotes = async(req,res) => {
    const notes = await noteSchema.find();
    
    if(!notes){
        return res.send("No Notes found");
    }

    res.send(notes);
}

module.exports = getNotes;