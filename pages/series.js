import React from 'react'

import Layout from '../components/layout'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

const style = {

}

export default class Index extends React.Component {
	static async getInitialProps ({ query }) {
		return {
			series: query.id
		}
	}

	constructor (props) {
  	super(props)
    this.state = {
			series: props.series,
			episode: ''
		}
  }

	 handleChangeEpisode = (event) => {
    this.setState({
      episode: event.target.value,
    })
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
				 <RaisedButton label="Buscar" primary={true} />
			</div>
		</Layout>)
	}
}