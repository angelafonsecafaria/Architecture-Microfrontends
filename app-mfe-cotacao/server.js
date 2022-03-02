var express = require('express')
var cors = require('cors')

var app = express()


app.use(cors())
app.use(express.static('dist/remote'))

const PORT = process.env.PORT || 8081

app.listen(PORT, () => {
  app._router.stack.forEach(function (r) {
    if (r.route && r.route.path) {
      console.log('->', r.route.path)
    }
  })
  console.log(`mock server is running on port ${PORT}`)
})
