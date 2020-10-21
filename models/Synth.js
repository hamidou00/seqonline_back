const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SynthSchema = new Schema({
    name: String,
    sequence : {
        type: Array,
        default: []
    },
    effects : Object,
    project: {
        type: Schema.Types.ObjectId,
        ref: "Project"
    },
})

const SynthModel = mongoose.model("Synth", SynthSchema);

module.exports = SynthModel;