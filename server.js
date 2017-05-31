const express = require('express')
var bodyParser = require('body-parser');
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const { list, create, get, remove } = require('./api/Crawler')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.use(bodyParser.text()); // for parsing serverlication/json
 
  server.put('/crawler/:id', function(req, res) {
    return create(req).then(
      result => res.status(201).send(result)
    ).catch(
      err => res.status(500).send(err)
    )
  })

  server.get('/crawler', function(req, res) {
    return list().then(
     result => res.send(result)
    ).catch(
      err => res.status(500).send(err)
    )
  })

  server.get('/crawler/:id', function(req, res) {
    return get(req).then(
     result => res.status(200).send(result)
    ).catch(
      err => res.status(500).send(err)
    )
  })

  server.delete('/crawler/:id', function(req, res) {
    return remove(req).then(
      result => res.status(200).send(result)
    ).catch(
      err => res.status(500).send(err)
    )
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})