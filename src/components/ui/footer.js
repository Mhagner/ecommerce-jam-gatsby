import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
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
    linkColumn: {
        width: '20rem',
    },
    linksContainer: {
        [theme.breakpoints.down('md')]: {
            marginBottom: '3rem',
        },
    },
    icon: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    "@global": {
        body: {
            margin: 0,
        },
        a: {
            textDecoration: 'none',
        }
    }
}))

const socialMedia = [
    {
        icon: Facebook,
        alt: 'facebook',
        link: 'https://www.facebook.com/',
    },
    {
        icon: Twitter,
        alt: 'twitter',
        link: 'https://www.twitter.com/',
    },
    {
        icon: Instagram,
        alt: 'instagram',
        link: 'https://www.instagram.com/',
    }
]

const routes = {
    'Contact Us': [
        {
            label: '(123) 456-7890',
            href: 'tel:1234567890',
        }, {
            label: 'm.hagner.sp@gmail.com',
            href: 'mailto:m.hagner.sp@gmail.com',
        }
    ],
    'Customer Service': [
        {
            label: 'Contact Us',
            link: '/contact'
        },
        {
            label: 'My Account',
            link: '/account'
        }
    ],
    'Information': [
        {
            label: 'Privacy Policy',
            link: '/privacy-policy'
        },
        {
            label: 'Terms & Conditions',
            link: '/terms-conditions'
        }
    ]
}

export default function Footer() {
    const classes = useStyles()

    return (
        <footer className={classes.footer}>
            <Grid container justify='space-between'>
                {/* Links */}
                <Grid item classes={{ root: classes.linksContainer }}>
                    <Grid container>
                        {Object.keys(routes).map(category => (
                            <Grid
                                item
                                key={category}
                                container
                                direction='column'
                                classes={{ root: classes.linkColumn }}
                            >
                                <Grid item>
                                    <Typography variant='h5' className={classes.link}>
                                        {category}
                                    </Typography>
                                </Grid>
                                {routes[category].map(route => (
                                    <Grid item key={route.label}>
                                        <Typography
                                            component={route.link ? Link : 'a'}
                                            to={route.link ? route.link : undefined}
                                            href={route.href ? route.href : undefined}
                                            variant='body1'
                                            classes={{ body1: classes.link }}
                                        >
                                            {route.label}
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                {/* Social Media Icons */}
                <Grid item>
                    <Grid container direction='column' alignItems='center'>
                        {socialMedia.map(({ icon, alt, link }) => (
                            <Grid item key={link}>
                                <IconButton
                                    classes={{ root: classes.icon }}
                                    disableRipple
                                    component='a'
                                    target='_blank'
                                    href={link}
                                >
                                    <img src={icon} alt={alt} />
                                </IconButton>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </footer>
    )
}