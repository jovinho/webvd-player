const path = require('path')
const ccrawler = require('ccrawler')
const crawlerDir = path.join(__dirname, '..', 'crawlers')

const findEpisode = (req) => {
	const crawler = req.params.id
	const episode = req.query.episode
	const crawlerFile = path.join(crawlerDir, crawler)

	return new Promise(function(resolve, reject) {
		ccrawler.execFile(crawlerFile, {tag: episode})
			.then(result => {
				resolve(result)
			})
			.catch(err => {
				reject(err)
			})
  })
}

module.exports = {
	findEpisode
}