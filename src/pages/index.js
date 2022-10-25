import * as React from "react"

import Layout from "../components/ui/layout"
import HeroBlock from "../components/ui/home/HeroBlock"
import PromotionalProducts from "../components/ui/home/PromotionalProducts"
import FeaturedProductions from "../components/ui/home/FeaturedProducts"
import MarketingButtons from "../components/ui/home/MarketingButtons"
import CallToAction from "../components/ui/home/CallToAction"

const IndexPage = () => (
  <Layout>
    <HeroBlock />
    <PromotionalProducts />
    <FeaturedProductions />
    <MarketingButtons />
    <CallToAction />
  </Layout>
)

export default IndexPage
