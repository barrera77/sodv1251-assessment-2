const mongoose = require("mongoose");

const eventCategorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
});
