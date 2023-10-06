const { noteSchema } = require("../model/notes");

const notes = async(req,res) =>{
    try {
        const {title,description} = req.body;

        const newNote = await new noteSchema({
            title : title,
            description : description
        }).save();
    
        res.status(200).send({
            sucess : true,
            message  : 'Note Created',
            newNote
        })
    } catch (error) {
        console.log('Error in Note Creation')
    }
}

module.exports = notes ;