import * as React from "react"

import Layout from "../components/ui/layout"
import HeroBlock from "../components/ui/home/HeroBlock"
import PromotionalProducts from "../components/ui/home/PromotionalProducts"
import FeaturedProductions from "../components/ui/home/FeaturedProducts"

const IndexPage = () => (
  <Layout>
    <HeroBlock />
    <PromotionalProducts />
    <FeaturedProductions />
  </Layout>
)

export default IndexPage
