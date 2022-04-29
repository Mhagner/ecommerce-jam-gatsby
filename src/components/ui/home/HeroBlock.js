import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Lottie from 'react-lottie'
import { makeStyles } from '@material-ui/core/styles'

import animationData from '../../../images/data.json'

const useStyles = makeStyles(({
    animationContainer: {
        display: 'flex',
    }
}))

export default function HeroBlock() {
    const classes = useStyles()

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData
    }

    return (
        <Grid cotainer className={classes.animationContainer} justify='space-around' alignItems='center'>
            <Grid item>
                <Grid container direction='column'>
                    <Grid item>
                        <Typography variant='h1' align='center'>
                            The Premier
                            <br />
                            Developer Clothing Line
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='h3' align='center'>
                            high quality, custom-designed shirts, hats, and hoodies
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Lottie options={defaultOptions} width='50rem' />
            </Grid>
        </Grid >
    )
}