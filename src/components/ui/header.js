import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import search from '../../images/search.svg'
import cart from '../../images/cart.svg'
import account from '../../images/account-header.svg'
import menu from '../../images/menu.svg'

const useStyles = makeStyles(theme => ({
  coloredIndicator: {
    backgroundColor: '#fff'
  },
  logoText: {
    color: theme.palette.common.black,
  },
  tabs: {
    marginRight: "auto",
    marginLeft: "auto",
  },
  icon: {
    width: '3rem',
    height: '3rem',
  }
}));

export default function Header({ categories }) {
  const handle = useStyles();
  const matchesMD = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const routes = [...categories, { attributes: { name: 'Contact us' }, id: 'contact' }];

  const tabs = (
    <Tabs value={0} classes={{ indicator: handle.coloredIndicator, root: handle.tabs }}>
      {routes.map(route => (
        <Tab key={route.id} label={route.attributes.name} />
      ))}
    </Tabs>
  )

  const drawer = (
    <SwipeableDrawer
      open={drawerOpen}
      onOpen={() => setDrawerOpen(true)}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      onClose={() => setDrawerOpen(false)}
    >
      <List disablePadding>
        {routes.map(route => (
          <ListItem divider button key={route.id}>
            <ListItemText primary={route.attributes.name} />
          </ListItem>
        ))}
      </List>
    </SwipeableDrawer>
  )

  return (
    <AppBar color='transparent' elevation={0}>
      <Toolbar>
        <Button>
          <Typography variant="h1">
            <span className={handle.logoText}>VAR</span> X
          </Typography>
        </Button>
        {matchesMD ? drawer : tabs}
        <IconButton>
          <img className={handle.icon} src={search} alt="search" />
        </IconButton>
        <IconButton>
          <img className={handle.icon} src={cart} alt="cart" />
        </IconButton>
        <IconButton onClick={() => matchesMD ? setDrawerOpen(true) : null}>
          <img className={handle.icon} src={matchesMD ? menu : account} alt={matchesMD ? "menu" : "account"} />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}