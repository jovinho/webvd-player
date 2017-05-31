const fs = require('fs')
const path = require('path')
const crawlerDir = path.join(__dirname, '..', 'crawlers')

const list = () => {
  return new Promise(function(resolve, reject) {
    fs.readdir(crawlerDir, function(err, files) {
      if (err) {
        reject(err)
      } else {
        resolve(files)
      }
    })
  })
}

const create = (req) => {
  const crawlerName = req.params.id
  const crawlerContent = req.body

  return new Promise(function(resolve, reject) {
    fs.writeFile(path.join(crawlerDir, crawlerName), crawlerContent, function(err) {
      if (err) {
        reject(err)
      } else {
        resolve(crawlerName)
      }
    })
  })
}

const get = (req) => {
  const crawlerName =  req.params.id

  return new Promise(function(resolve, reject) {
    fs.readFile(path.join(crawlerDir, crawlerName), { encoding: 'utf-8' }, function(err, data) {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

const remove = (req) => {
  const crawlerName =  req.params.id

  return new Promise(function(resolve, reject) {
    fs.unlink(path.join(crawlerDir, crawlerName), function(err) {
      if (err) {
        reject(err)
      } else {
        resolve(crawlerName)
      }
    })
  })
}

module.exports = {
  list,
  create,
  get,
  remove
}