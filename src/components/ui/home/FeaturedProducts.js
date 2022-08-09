import React from 'react'
import { Typography, Grid, Button } from '@material-ui/core'
import { useStaticQuery, graphql } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'

import featuredAdornment from '../../../images/featured-adornment.svg'
import frame from '../../../images/product-frame-grid.svg'

const useStyles = makeStyles(theme => ({
  background: {
    backgroundImage: `url(${featuredAdornment})`,
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '95rem',
    padding: '0 2.5rem',
  },
  featured: {
    height: '20rem',
    width: '20rem',
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
  },
  slide: {
    backgroundColor: theme.palette.primary.main,
    height: '20rem',
    width: '24.5rem',
  },
  productContainer: {
    margin: '5rem 0'
  }
}))

export default function FeaturedProductions() {
  const classes = useStyles()
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
    <Grid container direction="column" classes={{ root: classes.background }}>
      {data.allStrapiProducts.edges.map(({ node }, i) => {
        const alignment = i === 0 || i === 3 ?
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
                <Button classes={{ root: classes.frame }}>
                  <img
                    className={classes.featured}
                    src={process.env.GATSBY_STRAPI_URL + node.variants[1].images[0].url}
                    alt={node.name} />
                </Button>
                <Grid container direction="column" classes={{ root: classes.slide }}>

                </Grid>
              </Grid>
            </Grid>
          )
        )
      })}
    </Grid>
  )
}
