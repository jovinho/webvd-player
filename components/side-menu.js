import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import Link from 'next/link'

class SideMenu extends Component {
	constructor () {
		super();
		this.state = {
			drawerOpened: false
		};
	};
	_toggleDrawer () {
		this.setState({
			drawerOpened: !this.state.drawerOpened
		});
	};
	render () {
		return (
			<div>
				<AppBar title="WebVD-Player" onLeftIconButtonTouchTap={() => this._toggleDrawer()} />
				<Drawer docked={false} open={this.state.drawerOpened} onRequestChange={() => this._toggleDrawer()}>
					<List>
						<Link prefetch href='/'><ListItem>Lista de Séries</ListItem></Link>
					</List>
				</Drawer>
			</div>
		)
	}
}

export default SideMenu