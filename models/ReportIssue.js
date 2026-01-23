import mongoose from "mongoose";

const reportIssueSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },

        description: {
            type: String,
            required: true,
            trim: true,
        },

        image: {
            type: String,
            required: true,
        },

        latitude: {
            type: Number,
            required: true,
        },

        longitude: {
            type: Number,
            required: true,
        },

        accuracy: {
            type: Number,
            required: true,
        },

        locationTime: {
            type: Number,
            required: true,
        },

        imageTime: {
            type: Number,
            required: true,
        },
        isMarkedRead: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

const ReportIssue = mongoose.model("ReportIssue", reportIssueSchema);

export default ReportIssue;
