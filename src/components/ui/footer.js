import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'gatsby'

import Facebook from '../../images/facebook.svg'
import Twitter from '../../images/twitter.svg'
import Instagram from '../../images/instagram.svg'

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.primary.main,
        padding: '2rem',
    },
    link: {
        color: '#fff',
        fontSize: '1.25rem',
    },
    spacer: {
        marginTop: '2rem',
        marginBottom: '2rem',
    },
    linkColumn: {
        width: '20rem',
    },
    linksContainer: {
        [theme.breakpoints.down('md')]: {
            marginBottom: '3rem',
        },
    },
    "@global": {
        body: {
            margin: 0,
        }
    }
}))

export default function Footer() {
    const classes = useStyles()

    return (
        <footer className={classes.footer}>
            <Grid container justify='space-between'>
                {/* Links */}
                <Grid item classes={{ root: classes.linksContainer }}>
                    <Grid container>
                        <Grid item container direction='column' classes={{ root: classes.linkColumn }}>
                            <Grid item>
                                <Typography variant='h5'>Contact Us</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='body1' classes={{ body1: classes.link }}>(62) XXXX-XXXX</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='body1' classes={{ body1: classes.link }}>loja@commerce.com.br</Typography>
                            </Grid>
                        </Grid>
                        <Grid item container direction='column' classes={{ root: classes.linkColumn }}>
                            <Grid item>
                                <Typography variant='h5'>Customer service</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='body1' classes={{ body1: classes.link }}>Contact Us</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='body1' classes={{ body1: classes.link }}>My Account</Typography>
                            </Grid>
                        </Grid>
                        <Grid item container direction='column' classes={{ root: classes.linkColumn }}>
                            <Grid item>
                                <Typography variant='h5'>Information</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='body1' classes={{ body1: classes.link }}>Privacy Policy</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='body1' classes={{ body1: classes.link }}>Terms & Conditions</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/* Social Media Icons */}
                <Grid item>
                    <Grid container direction='column' alignItems='center'>
                        <Grid item>
                            <img src={Facebook} alt="facebook" />
                        </Grid>
                        <Grid item classes={{ root: classes.spacer }}>
                            <img src={Twitter} alt="twitter" />
                        </Grid>
                        <Grid item>
                            <img src={Instagram} alt="instagram" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </footer>
    )
}