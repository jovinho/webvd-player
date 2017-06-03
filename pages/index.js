import Link from 'next/link'

import Button from 'muicss/lib/react/button'
import Container from 'muicss/lib/react/container'
import Panel from 'muicss/lib/react/panel'
import Row from 'muicss/lib/react/row'
import Col from 'muicss/lib/react/col'
import Divider from 'muicss/lib/react/divider'

import Layout from '../components/layout'

const style = {
  fullwidth : {
    width: '100%'
  }
}

export default class Index extends React.Component {
  state = {
    crawlers: []
  }

  static async getInitialProps ({ req }) {
    const mainUrl = req ? 'http://localhost:3000' : window.location.origin
    const res = await fetch(mainUrl + '/crawler')
    const json = await res.json()
    return { crawlers: json }
  }

  render() {
    const crawlers = this.props.crawlers
    return (
      <Layout>
        <Container >
					<br/>
					<br/>
					<div className="mui--text-display1 mui--text-center">Series</div>
					<br/>
					<br/>
					 <Panel className="mui--text-center mui--z2">
        		<table className="mui-table mui-table--bordered">
              <thead className>
                <tr>
                  <th className="mui--text-center">Name</th>
                  <th className="mui--text-center">Edit</th>
                  <th className="mui--text-center">Delete</th>
                </tr>
              </thead>
              <tbody>
                {crawlers.map(crawler => (
                  <tr>
                    <td>
                      <Link href={`/series?id=${crawler}`} as={`/series/${crawler}`}>
                        <Button variant="raised" style={style.fullwidth}>{crawler}</Button>
                      </Link>
                    </td>
                    <td><Button variant="raised" style={style.fullwidth}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></Button></td>
                    <td><Button variant="raised" style={style.fullwidth}><i className="fa fa-trash" aria-hidden="true"></i></Button></td>
                  </tr>
                ))}
              </tbody>
            </table>
    		  </Panel>
        </Container>

      </Layout>
    );
  }
}