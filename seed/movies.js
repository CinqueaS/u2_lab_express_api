const db = require(`../db`)
const { Movie, Actor, Review } = require(`../models`)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {
    const movie1 = await new Movie({
      title: 'Scott Pilgrim vs The World',
      runtimeInMinutes: 112,
      Rating: `PG-13`,
      yearReleased: 2010,
      Description: `This is a movie description`,
    })
    movie1.save()
  
    const movie2 = await new Movie({
        title: 'Avengers: Endgame',
        runtimeInMinutes: 181,
        Rating: `PG-13`,
        yearReleased: 2019,
        Description: `This is a movie description`,
      })
      movie2.save()
  
    const movie3 = await new Movie({
        title: 'Home Alone',
        runtimeInMinutes: 103,
        Rating: `PG`,
        yearReleased: 1990,
        Description: `This is a movie description`,
      })
      movie3.save()
  
    const movie4 = await new Movie({
        title: 'Goodfellas',
        runtimeInMinutes: 146,
        Rating: `R`,
        yearReleased: 1990,
        Description: `This is a movie description`,
      })
      movie4.save()
  
    const movie5 = await new Movie({
        title: 'Friday',
        runtimeInMinutes: 90,
        Rating: `R`,
        yearReleased: 1995,
        Description: `This is a movie description`,
      })
      movie5.save()
    const Actors = [
        {
            name: "Michael Cera",
            age: 36,
            isAlive: true,
            appearsIn: [movie1.title]
        },
        {
            name: "Chris Evans",
            age: 43,
            isAlive: true,
            appearsIn: [movie1.title, movie2.title]
        },
        {
            name: "Robert Downer Jr.",
            age: 59,
            isAlive: true,
            appearsIn: [movie2.title]
        },
        {
            name: "Macaulay Culkin",
            age: 44,
            isAlive: true,
            appearsIn: [movie3.title]
        },
        {
            name: "Robert De Niro",
            age: 81,
            isAlive: true,
            appearsIn: [movie4.title]
        },
        {
            name: "Joe Pesci",
            age: 81,
            isAlive: true,
            appearsIn: [movie3.title, movie4.title]
        },
        {
            name: "Mary Elizabeth Winstead",
            age: 39,
            isAlive: true,
            appearsIn: [movie1.title]
        },
        {
            name: "Raymond Allen Liotta",
            age: 67,
            isAlive: false,
            appearsIn: [movie4.title]
        },
        {
            name: "O'Shea Jackson aka Ice Cube",
            age: 55,
            isAlive: true,
            appearsIn: [movie5.title]
        },
        {
            name: "John Witherspoon",
            age: 77,
            isAlive: false,
            appearsIn: [movie5.title]
        }
    ]
    const Reviews = [
        {
            score: 4,
            comment: "This is a movie review",
            reviewFor: movie1._id
        },
        {
            score: 3,
            comment: "This is a movie review",
            reviewFor: movie1._id
        },
        {
            score: 4,
            comment: "This is a movie review",
            reviewFor: movie2._id
        },
        {
            score: 5,
            comment: "This is a movie review",
            reviewFor: movie2._id
        },
        {
            score: 5,
            comment: "This is a movie review",
            reviewFor: movie4._id
        },
        {
            score: 5,
            comment: "This is a movie review",
            reviewFor: movie4._id
        },
    ]
    await Actor.insertMany(Actors)
    await Review.insertMany(Reviews)
    console.log("Created movies with actors and reviews")
}

const run = async () => {
    await main()
    db.close()
  }
  
  run()