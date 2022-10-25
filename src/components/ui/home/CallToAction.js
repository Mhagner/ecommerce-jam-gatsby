import React from 'react';
import Grid from "@material-ui/core/Grid"
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby'

import cta from '../../../images/cta.svg';

const useStyles = makeStyles(theme => ({
  container: {
    marginBottom: '15rem'
  },
  account: {
    color: '#FFF',
    marginLeft: '2rem'
  },
  body: {
    maxWidth: '45rem',
  },
  buttonContainer: {
    marginTop: '3rem'
  }
}))

export default function CallToAction() {
  const classes = useStyles()

  return (
    <Grid
      container
      justify="space-around"
      alignItems="center"
      classes={{ root: classes.container }}
    >
      <Grid item>
        <img src={cta} alt="quality comitted" />
      </Grid>
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h1">
              Committed To Quality
            </Typography>
          </Grid>
          <Grid item classes={{ root: classes.body }}>
            <Typography variant="body1">
              At VAR X our misson is to provide comfortable, durable, premium,
              designer clothing and clothing acessories to developer and technology enthusiasts
            </Typography>
          </Grid>
          <Grid item container classes={{ root: classes.buttonContainer }}>
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                component={Link}
                to='/contact'
              >
                Contact Us
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                classes={{ root: classes.account }}
                component={Link}
                to='/account'
              >
                Create Account
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
