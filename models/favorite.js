const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the favoriteSchema
const favoriteSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    campsites: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Campsite",
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Create the Favorite model
const Favorite = mongoose.model("Favorite", favoriteSchema);

// Export the model
module.exports = Favorite;
