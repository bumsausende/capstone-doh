const mongoose = require("mongoose");

const toDOHSchema = {
    title: String,
    content: String
}
const createToDOH = mongoose.model("createToDOH", toDOHSchema);

module.exports = createToDOH;