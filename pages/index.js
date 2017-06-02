import React from 'react'
import Link from 'next/link'

import RaisedButton from 'material-ui/RaisedButton'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import IconButton from 'material-ui/IconButton'
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit'
import ModeDelete from 'material-ui/svg-icons/action/delete'
import FlatButton from 'material-ui/FlatButton'

import Layout from '../components/layout'

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
              <TableRowColumn><Link prefetch href={'/series/'+crawler}><FlatButton label={crawler}/></Link></TableRowColumn>
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
