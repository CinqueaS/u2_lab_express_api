const { Schema } = require(`mongoose`)

const reviewSchema = new Schema(
    {
      score: { type: Number, min: 0, max: 5, required: true },
      comment: { type: String, required: true },
      reviewFor: { type: Schema.Types.ObjectId, ref: `movie_id`}
    },
    { timestamps: true }
  )

  module.exports = reviewSchema