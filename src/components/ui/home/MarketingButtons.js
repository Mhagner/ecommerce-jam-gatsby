import React from 'react';
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles';
import { Link } from 'gatsby'

import marketingAdornment from '../../../images/marketing-adornment.svg'
import moreByUs from '../../../images/more-by-us.svg'
import store from '../../../images/store.svg'

const useStyles = makeStyles(theme => ({
  button: {
    backgroundImage: `url(${marketingAdornment})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '50rem',
    width: '50rem',
    transition: 'transform 0.5s ease',

    "&:hover": {
      transform: 'scale(1.1)'
    }
  },
  container: {
    margin: '15rem 0'
  }
}))

export default function MarketingButtons() {
  const classes = useStyles()

  const buttons = [
    { label: 'Store', icon: store, link: '/hoodies' },
    { label: 'More By Us', icon: moreByUs, href: 'http://www.google.com' },
  ]

  return (
    <Grid container justify="space-around" classes={{ root: classes.container }}>
      {buttons.map(button => (
        <Grid item>
          <Grid
            alignItems="center"
            justify="center"
            container
            direction="column"
            classes={{ root: classes.button }}
            component={button.link ? Link : 'a'}
            to={button.link ? button.link : undefined}
            href={button.href ? button.href : undefined}
          >
            <Grid item>
              <img src={button.icon} alt={button.label} />
            </Grid>
            <Grid item>
              <Typography variant="h1">
                {button.label}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  )
}
