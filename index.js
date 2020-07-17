const data = require('./data.json')
const express = require('express')

console.log('data test:', data)

const app = express()

const port = 4000

function onListen () {
  const message = `Listening on :${port}`

  console.log(message)
}

app.get('/', function (request, response) {
  response.send(data)
})

app.get(
  '/user/:username',
  (request, response) => {
    const { username } = request.params

    const user = data
      .find(user => user.name === username)

    response.send(user)
  }
)

app.listen(port, onListen)

// JSON API with Express
// Two endpoints
// One endpoint that returns all user data
// Another endpoint that takes a user name parameter and returns the data for only that user