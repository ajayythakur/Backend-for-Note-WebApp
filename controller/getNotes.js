const { noteSchema } = require("../model/notes")

const getNotes = async(req,res) => {
    const sort = {createdAt:-1}
    const notes = await noteSchema.find().sort(sort);
    
    if(!notes){
        return res.send("No Notes found");
    }

    res.send(notes);
}

module.exports = getNotes;