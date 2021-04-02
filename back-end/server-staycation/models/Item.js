/* eslint-disable no-undef */
var mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const itemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        default: 'Indonesia'
    },
    city: {
        type: String,
        required: true
    },
    isPopular: {
        type: Boolean
    },
    description: {
        type: String,
        required: true
    },
    imageId: [{
        type: ObjectId,
        ref: 'Image'
    }],
    featureID: [{
        type: ObjectId,
        ref: 'Feature'
    }],
    activityID: [{
        type: ObjectID,
        ref: 'Activity'
    }]
});

module.exports = mongoose.model('Item', itemSchema);