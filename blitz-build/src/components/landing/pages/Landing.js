import React from "react"

import Layout from "../layouts/Layouts"
import Hero from "../components/Hero"
import Signup from "../components/Signup"
import ValueProp from "../components/ValueProp"

const Landing = () => (
  <Layout>
  <Hero /> 
   <ValueProp />
    <Signup /> 
  </Layout>
)

export default Landing
