import mongoose from "mongoose";
const NotificationSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["volunteerRequest", "reportIssue"],
    required: true,
  },

  message: String,
  relatedId: mongoose.Schema.Types.ObjectId,
  status: {
    type: String,
    enum: ["new", "inProgress", "resolved"],
    default: "new",
  },


}, { timestamps: true });

const Alert =  mongoose.model("Alert", NotificationSchema );
export { Alert };