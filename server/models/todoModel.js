const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
    description: { type: String, required: true },
    dueDate: { type: Date, required: true },
    priority: { type: String, enum: ["low", "medium", "high"], default: "medium" },
    tags: [{ type: String }],
  },
  { timestamps: true }
)

module.exports = mongoose.model("Todo", todoSchema)