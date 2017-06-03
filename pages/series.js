import Form from 'muicss/lib/react/form'
import Input from 'muicss/lib/react/input'
import Button from 'muicss/lib/react/button'
import Container from 'muicss/lib/react/container'

import Layout from '../components/layout'
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

	async searchEpisode(e, ev) {
		e.preventDefault()
		const series = this.state.series
		const episode = this.state.episode

		const mainUrl = window.location.origin
		const res = await fetch(`${mainUrl}/api/series/${series}?episode=${episode}`)
    const url = await res.text()
		this.handleChangeEpisodeUrl(url)
	}

  render () {
		return (
		<Layout>
			<Container>
				<br/>
				<br/>
				<Form onSubmit={this.searchEpisode.bind(this)}>
        	<legend>Busca de episódio</legend>
					<Input label="Número do episódio" required floatingLabel={true} value={this.state.episode} onChange={this.handleChangeEpisode} />
					<Button variant="raised">Buscar</Button>
				</Form>
				<br />
				{
					this.state.episodeUrl &&
					<Player src={this.state.episodeUrl} />
				}
			</Container>
		</Layout>)
	}
}