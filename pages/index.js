import React from 'react'

import RaisedButton from 'material-ui/RaisedButton'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import IconButton from 'material-ui/IconButton';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit'
import ModeDelete from 'material-ui/svg-icons/action/delete'
import Layout from '../components/layout'

const style = {
  paper: {
    height: 200,
    width: 300,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block'
  }
}

export default class Index extends React.Component {
  static async getInitialProps () {
    const res = await fetch('http://localhost:3000/crawler')
    const json = await res.json()
    return { crawlers: json }
  }

  render () {
    const crawlers = this.props.crawlers
    return (
      <Layout>
        <Table selectable={false}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Edit</TableHeaderColumn>
              <TableHeaderColumn>Delete</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {crawlers.map(crawler => (
            <TableRow>
              <TableRowColumn>{crawler}</TableRowColumn>
              <TableRowColumn>
                <IconButton tooltip="Edit">
                  <ModeEdit />
                </IconButton>
              </TableRowColumn>
              <TableRowColumn>
                <IconButton tooltip="Edit">
                  <ModeDelete />
                </IconButton>
              </TableRowColumn>
            </TableRow>
            ))}
          </TableBody>
        </Table>
      </Layout>
    )
  }
}
