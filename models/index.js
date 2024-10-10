const mongoose = require(`mongoose`)
const MovieSchema = require(`./movie`)
const ActorSchema = require(`./Actor`)
const ReviewSchema = require(`./Review`)

const Movie = mongoose.model(`Movie`, MovieSchema)
const Actor = mongoose.model(`Actor`, ActorSchema)
const Review = mongoose.model(`Review`, ReviewSchema)

module.exports = {
    Movie,
    Actor,
    Review
}