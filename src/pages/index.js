import * as React from "react"

import Layout from "../components/ui/layout"
import HeroBlock from "../components/ui/home/HeroBlock"
import PromotionalProducts from "../components/ui/home/PromotionalProducts"

const IndexPage = () => (
  <Layout>
    <HeroBlock />
    <PromotionalProducts />
  </Layout>
)

export default IndexPage
