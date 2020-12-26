const mongoose = require("mongoose");
const schema = mongoose.Schema;
const PubSchema = new schema({
    name: {
        type: String,
        required: true,
    },
    titre: {
        type: String,
        required: true,
    },
   
    content: {
        type: String,
        required: true,
    }

});

module.exports = mongoose.model("publication", PubSchema);
