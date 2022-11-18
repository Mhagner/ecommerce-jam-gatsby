import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Carousel from 'react-spring-3d-carousel'
import clsx from 'clsx'
import { useMediaQuery } from '@material-ui/core'
import { useStaticQuery, graphql } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'

import promoAdornment from '../../../images/promo-adornment.svg'
import explore from '../../../images/explore.svg'

const useStyles = makeStyles(theme => ({
  mainContainer: {
    backgroundImage: `url(${promoAdornment})`,
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '70rem',
    padding: '30rem 10rem 10rem 10rem',
    [theme.breakpoints.down('lg')]: {
      padding: '20rem 2rem 2rem 2rem'
    }
  },
  productName: {
    color: '#fff',
  },
  iconButton: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  carouselImage: {
    height: '30rem',
    width: '25rem',
    backgroundColor: '#fff',
    borderRadius: 20,
    boxShadow: theme.shadows[5],
    [theme.breakpoints.down('sm')]: {
      height: '25rem',
      width: '20rem',
    },
    [theme.breakpoints.down('xs')]: {
      height: '20rem',
      width: '15rem',
    }
  },
  carouselContainer: {
    marginLeft: '20rem',
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
      height: '30rem',
    }
  },
  space: {
    margin: '0 15rem 10rem 15rem',
    [theme.breakpoints.down('sm')]: {
      margin: '0 10rem 10rem 10rem',
    }

  },
  explore: {
    transform: 'none',
    marginRight: '2rem'
  },
  descriptionContainer: {
    textAlign: 'right',
    [theme.breakpoints.down('md')]:{
      textAlign:'center'
    }
  }
}))

export default function PromotionalProducts() {
  const classes = useStyles()
  const [selectedSlide, setSelectedSlide] = useState(0)

  const matchesMD = useMediaQuery(theme => theme.breakpoints.down('md'))

  const data = useStaticQuery(graphql`
        query GetPromo {
            allStrapiProducts(filter: {promo: {eq: true}}) {
                edges {
                    node {
                        name
                        strapiId
                        description
                        variants {
                            images {
                                url
                            }
                        }
                    }
                }
            }
        }
    `)

  let slides = []

  data.allStrapiProducts.edges.map(({ node }, index) => slides.push(
    {
      key: index,
      content: (
        <Grid container direction="column" align="center">
          <Grid item>
            <Button
              onClick={() => setSelectedSlide(index)}
              classes={{
                root: clsx(classes.iconButton, {
                  [classes.space]: selectedSlide !== index
                })
              }}>
              <img
                src={process.env.GATSBY_STRAPI_URL + node.variants[0].images[0].url}
                alt={`image-${index}`}
                className={classes.carouselImage}
              />
            </Button>
          </Grid>
          <Grid item>
            {selectedSlide === index ? (
              <Typography variant="h1" classes={{ root: classes.productName }}>
                {node.name.split(" ")[2]}
              </Typography>
            ) : null}
          </Grid>
        </Grid>
      ),
      description: node.description
    }
  ))

  return (
    <Grid
      container
      justify={matchesMD ? 'space-around' : 'space-between'}
      alignItems="center"
      classes={{ root: classes.mainContainer }}
      direction={matchesMD ? "column" : "row"}
    >
      <Grid item classes={{ root: classes.carouselContainer }}>
        <Carousel slides={slides} goToSlide={selectedSlide} />
      </Grid>
      <Grid item classes={{ root: classes.descriptionContainer }}>
        <Typography variant="h2" paragraph>
          {slides[selectedSlide].description}
        </Typography>
        <Button>
          <Typography variant="h4" classes={{ root: classes.explore }}>
            Explore
          </Typography>
          <img src={explore} alt="go to product page" />
        </Button>
      </Grid>
    </Grid>
  )
}
