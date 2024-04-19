import mongoose from "mongoose";

const Schema = mongoose.Schema;

const experienceSchema = new Schema(
  {
    jobTitle: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    companyLink: {
      type: String,
    },
    isIntern: {
      type: Boolean,
      default: false,
    },
    description: {
      type: [String],
      required: true,
    },
    techStack: {
      type: [String],
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

export const ExperienceModel = mongoose.models.ExperienceModel || mongoose.model("ExperienceModel", experienceSchema);
