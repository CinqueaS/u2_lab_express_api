const { Schema } = require(`mongoose`)

const movieSchema = new Schema(
    {
      title: { type: String, required: true },
      runtimeInMinutes: { type: Number, required: true },
      Rating: {type: String, required: true},
      yearReleased: {type: Number, required: true},
      Description: {type: String, required: true},
      
    },
    { timestamps: true }
  )

  module.exports = movieSchema