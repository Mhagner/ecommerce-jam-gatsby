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
import { Link } from 'gatsby'

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
  logoContainer: {
    [theme.breakpoints.down('md')]: {
      marginRight: 'auto',
    }
  },
  tab: {
    ...theme.typography.body1,
    fontWeight: 600,
  },
  tabs: {
    marginRight: "auto",
    marginLeft: "auto",
  },
  icon: {
    width: '3rem',
    height: '3rem',
  },
  drawer: {
    backgroundColor: theme.palette.primary.main,
  },
  listItemText: {
    color: '#fff',
  }
}));

export default function Header({ categories }) {
  const handle = useStyles();
  const matchesMD = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const activeIndex = () => {
    const found = routes.indexOf(
      routes.filter(
        ({ name, link }) =>
          (link || `/${name.toLowerCase()}`) === window.location.pathname
      )[0]
    )

    return found === -1 ? 0 : found
  }

  const routes = [...categories, { name: 'Contact us', id: 'contact', link: '/contact' }]

  const tabs = (
    <Tabs value={activeIndex()} classes={{ indicator: handle.coloredIndicator, root: handle.tabs }}>
      {routes.map(route => (
        <Tab
          component={Link}
          to={route.link || `/${route.name.toLowerCase()}`}
          classes={{ root: handle.tab }}
          key={route.id}
          label={route.name} />
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
      classes={{ paper: handle.drawer }}
    >
      <List disablePadding>
        {routes.map((route, index) => (
          <ListItem
            selected={activeIndex() === index}
            component={Link}
            to={route.link || `/${route.name.toLowerCase()}`}
            divider
            button
            key={route.id}
          >
            <ListItemText
              classes={{ primary: handle.listItemText }}
              primary={route.name}
            />
          </ListItem>
        ))}
      </List>
    </SwipeableDrawer>
  )

  const actions = [
    { icon: search, alt: 'search', visible: true, onClick: () => console.log('search') },
    { icon: cart, alt: 'cart', visible: true, link: '/cart' },
    { icon: account, alt: 'account', visible: !matchesMD, link: '/account' },
    { icon: menu, alt: 'menu', visible: matchesMD, onClick: () => setDrawerOpen(true) },
  ]

  return (
    <AppBar color='transparent' elevation={0} position='static'>
      <Toolbar>
        <Button component={Link} to="/" classes={{ root: handle.logoContainer }}>
          <Typography variant="h1">
            <span className={handle.logoText}>VAR</span> X
          </Typography>
        </Button>
        {matchesMD ? drawer : tabs}
        {actions.map(action => {
          if (action.visible) {
            return (
              <IconButton
                onClick={action.onClick}
                component={action.onClick ? undefined : Link}
                to={action.onClick ? undefined : action.link}
                key={action.alt}
              >
                <img
                  src={action.icon}
                  alt={action.alt}
                  className={handle.icon}
                />
              </IconButton>
            )
          }
        })}
      </Toolbar>
    </AppBar>
  )
}
