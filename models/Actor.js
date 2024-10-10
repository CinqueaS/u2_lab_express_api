const { Schema } = require(`mongoose`)

const actorSchema = new Schema(
    {
      name: { type: String, required: true },
      age: { type: Number, required: true },
      isAlive: { type: Boolean, required: true },
      appearsIn: {type: Array, ref: `movie_title`}
    },
    { timestamps: true }
  )

  module.exports = actorSchema