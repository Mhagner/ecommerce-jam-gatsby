/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/styles"

import Header from "./header"
import Footer from "./footer"

const useStyles = makeStyles(theme => ({
  spacer: {
    marginBottom: '10rem',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2rem'
    }
  }
}))

const Layout = ({ children }) => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query GetCategories {
      allStrapiCategories {
        nodes {
          name
          id
        }
      }
    }
  `)

  return (
    <>
      <Header categories={data.allStrapiCategories.nodes} />
      <div className={classes.spacer} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
