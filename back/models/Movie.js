import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    movieName: {
        type: String,
        required: true,
    },
    checked: {
        type: Boolean,
        default: false,
    },
    heart: {
        type: String,
        default: 'Clear', //нейтральный
    },
    list: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'List',
        required: true,
    },
});

export default mongoose.model("Movie", movieSchema);