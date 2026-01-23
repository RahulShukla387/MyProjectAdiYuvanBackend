import mongoose from "mongoose";

const VolunteerSchema = new mongoose.Schema(
  {
    contactNo: {
      type: String,
      required: true,
      trim: true
    },
    relatedId: mongoose.Schema.Types.ObjectId,
    reason: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["new", "accepted"],
      default: "new"
    },
    markReadVolunteer: {
     type: Boolean,
     default: false,
    }
  },
  {
    timestamps: true
  }
);

const Volunteer = mongoose.model("Volunteer", VolunteerSchema);
export { Volunteer };
