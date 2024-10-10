const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Movie, Review, Actor } = require(`./models`)

const app = express()

app.use(cors())
app.use(express.json())



app.get('/', async (req, res) => {
    const movies = await Movie.find({})
  res.json(movies)
})


app.get(`/movie/:id`, async (req, res) => {
    try{
        const { id } = req.params
        const movie = await Movie.findById(id)
        if (!movie) throw Error('404 Movie not found')
        res.json(movie)
    }
    catch (e){
        console.log(e)
        res.send("Movie not found")
    }
})

app.get('/actors', async (req, res) => {
    const actors = await Actor.find({})
    res.json(actors)
})

app.get(`/actors/:id`, async (req, res) => {
    try{
        const { id } = req.params
        const actor = await Actor.findById(id)
        if (!actor) throw Error('404 Actor not found')
        res.json(actor)
    }
    catch (e){
        console.log(e)
        res.send("Actor not found")
    }
})

app.get('/reviews', async (req, res) => {
    const reviews = await Review.find({})
    res.json(reviews)
})

app.get(`/reviews/:id`, async (req, res) => {
    try{
        const { id } = req.params
        const review = await Review.findById(id)
        if (!review) throw Error('404 Review not found')
        res.json(review)
    }
    catch (e){
        console.log(e)
        res.send("Review not found")
    }
})

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
  })