import React from 'react'

import Layout from '../components/layout'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import Player from '../components/player'

export default class Index extends React.Component {
	static async getInitialProps ({ query, pathname, asPath }) {
		return {
			series: query.id
		}
	}

	constructor (props) {
  	super(props)
    this.state = {
			series: props.series,
			episode: '',
			episodeUrl: null
		}
  }

	 handleChangeEpisode = (event) => {
    this.setState({
      episode: event.target.value
    })
  }

	handleChangeEpisodeUrl = (url) => {
    this.setState({
      episodeUrl: url
    })
  }

	async searchEpisode() {
		const series = this.state.series
		const episode = this.state.episode

		const res = await fetch(`http://localhost:3000/api/series/${series}?episode=${episode}`)
    const url = await res.text()
		this.handleChangeEpisodeUrl(url)
	}

  render () {
		return (
		<Layout>
			<div>
				<TextField
				  type="text"
				  name="episode"
				  hintText="Digite aqui o episodio"
					value={this.state.episode}
					onChange={this.handleChangeEpisode} />
					<br />
				 <RaisedButton label="Buscar" primary={true} onClick={this.searchEpisode.bind(this)}/>
				 <br />
				 <br />
				 <br />
				 {
					 this.state.episodeUrl &&
					 <Player src={this.state.episodeUrl} />
				 }
			</div>
		</Layout>)
	}
}