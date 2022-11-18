import React, { useState } from 'react'
import clsx from 'clsx'
import { Typography, Grid, Button, Chip } from '@material-ui/core'
import { useStaticQuery, graphql } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import featuredAdornment from '../../../images/featured-adornment.svg'
import frame from '../../../images/product-frame-grid.svg'
import explore from '../../../images/explore.svg'

import Rating from './Rating'

const useStyles = makeStyles(theme => ({
  background: {
    backgroundImage: `url(${featuredAdornment})`,
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '110rem',
    padding: '0 2.5rem',
    [theme.breakpoints.down('md')]: {
      height: '100rem'
    }
  },
  featured: {
    height: '20rem',
    width: '20rem',
    [theme.breakpoints.down('md')]: {
      height: '15rem',
      width: '15rem',
    }
  },
  frame: {
    backgroundImage: `url(${frame})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '24.8rem',
    width: '25rem',
    boxSizing: 'border-box',
    boxShadow: theme.shadows[5],
    position: 'absolute',
    zIndex: 1,
    [theme.breakpoints.down('md')]: {
      height: '19.8rem',
      width: '20rem',
    }
  },
  slide: {
    backgroundColor: theme.palette.primary.main,
    height: '20rem',
    width: '24.5rem',
    zIndex: 0,
    transition: 'transform 0.5s ease',
    padding: '1rem 2rem',
    [theme.breakpoints.down('md')]: {
      height: '15rem',
      width: '19.5rem',
    }
  },
  slideLeft: {
    transform: 'translate(-24.5rem, 0px)',
  },
  slideRight: {
    transform: 'translate(24.5rem, 0px)',
  },
  slideDown: {
    transform: 'translate(0px, 20rem)',
  },
  productContainer: {
    margin: '5rem 0',
  },
  exploreContainer: {
    marginTop: 'auto',
  },
  exploreButton: {
    textTransform: 'none'
  },
  exploreIcon: {
    height: '1rem',
    marginLeft: '1rem'
  },
  chipLabel: {
    ...theme.typography.h5
  },
  chipRoot: {
    backgroundColor: theme.palette.secondary.main
  }
}))

export default function FeaturedProductions() {
  const classes = useStyles()
  const [expanded, setExpanded] = useState(null)

  const matchesDM = useMediaQuery(theme => theme.breakpoints.down('md'))


  const data = useStaticQuery(graphql`
    query GetFeatured {
      allStrapiProducts(filter: {featured: {eq: true}}) {
        edges {
          node {
            name
            strapiId
            variants {
              price
              images {
                url
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Grid
      container
      direction="column"
      justify={matchesDM ? 'space-between' : 'center'}
      classes={{ root: classes.background }}
      >
      {data.allStrapiProducts.edges.map(({ node }, i) => {
        const alignment = matchesDM ? 'center' : i === 0 || i === 3 ?
          'flex-start' :
          i === 1 || i === 4 ?
            'center' : 'flex-end';

        return (
          node.variants.length > 0 && (
            <Grid
              item
              justify={alignment}
              container
              key={node.strapiId}
              classes={{ root: classes.productContainer }}
              alignItems='center'
            >
              <Grid item>
                <Button
                  onClick={() => expanded === i ? setExpanded(null) : setExpanded(i)}
                  classes={{ root: classes.frame }}>
                  <img
                    className={classes.featured}
                    src={process.env.GATSBY_STRAPI_URL + node.variants[1].images[0].url}
                    alt={node.name}
                  />
                </Button>
                <Grid container direction="column" classes={{
                  root: clsx(classes.slide, {
                    [classes.slideLeft]: !matchesDM && expanded === i && alignment === 'flex-end',
                    [classes.slideRight]: !matchesDM && expanded === i &&
                    (alignment === 'flex-start' || alignment === 'center'),
                      [classes.slideDown]: matchesDM && expanded === i,
                  })
                }}>
                  <Grid item>
                    <Typography variant="h4">
                      {node.name.split(" ")[2]}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Rating number={4} />
                  </Grid>
                  <Grid item>
                    <Chip
                      classes={{ root: classes.chipRoot, label: classes.chipLabel }}
                      label={`$${node.variants[1].price}`}
                    />
                  </Grid>
                  <Grid item classes={{ root: classes.exploreContainer }}>
                    <Button classes={{ root: classes.exploreButton }}>
                      <Typography variant="h5">
                        Details
                      </Typography>
                      <img
                        src={explore}
                        alt="go to product details"
                        className={classes.exploreIcon}
                      />
                    </Button>
                  </Grid>

                </Grid>
              </Grid>
            </Grid>
          )
        )
      })}
    </Grid >
  )
}
