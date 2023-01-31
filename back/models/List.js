import mongoose from "mongoose";

const listSchema = new mongoose.Schema({
    listName: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: true,
    },
});

export default mongoose.model("List", listSchema);