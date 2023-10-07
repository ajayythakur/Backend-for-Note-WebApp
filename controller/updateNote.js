const { noteSchema } = require("../model/notes");

const updateNote = async(req,res) => {
    const id = req.params.id;
    const newTitle = req.params.newTitle;
    const newDes = req.params.newDes;
    // console.log(newTitle,newDes)
    const note = await noteSchema.findOneAndUpdate(
    {_id:id}, {title:newTitle, description :  newDes} 
    );
    if(note){
        res.status(200).send({
            success:true,
            message : "Note Updated",
            note : {

            }
        })
    }
}

module.exports = updateNote