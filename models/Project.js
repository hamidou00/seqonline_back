const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: {
        type : String,
        default : "Project 1"
    },
    
    creator: {
    type: Schema.Types.ObjectId,
    ref: "User"
    },

    // overview : {
    //     effectList : [{
    //         type : String,
    //         required: true
    //     }],
    //     synthList : [{
    //         type : String,
    //         required: true
    //     }]
    // }, // all effects name and synths name

    // synthList: [{
    //     type: Schema.Types.ObjectId,
    //     ref: "Synth"
    // }],

    sequence: {
        type : Array,
        default : []
    },

    //   samples: [{
    //     type: Schema.Types.ObjectId,
    //     ref: "Sample"
    //   }],

    //   sequence: {
    //     type: Schema.Types.ObjectId,
    //     ref: "Sequencer"
    //   }
});

const ProjectModel = mongoose.model("Project", projectSchema);

module.exports = ProjectModel;