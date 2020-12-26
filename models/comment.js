const mongoose = require("mongoose");
const schema = mongoose.Schema;
const CommentSchema = new schema({
    content: {
        type: String,
        required: true,
    }
   
     

});

module.exports = mongoose.model("comment", CommentSchema);
