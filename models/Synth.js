const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SynthSchema = new Schema({
    name: String,
    sequence : Array,
    effects : Object,
})

const SynthModel = mongoose.model("Synth", SynthSchema);

module.exports = SynthModel;