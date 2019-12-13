import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import {gatsby, react, graphql, git}  from '../components/images';
import Shop from '../components/shop';

const techs = [
  {id: 1, 
    title: 'Gatsby', 
    content: 'Amazing framework', 
    image: gatsby},
  {id: 2, 
    title: 'React', 
    content: 'Outstanding library', 
    image: react},
  {id: 3, 
    title: 'GraphQL', 
    content: 'Fast data fetching', 
    image: graphql},
  {id: 4, 
    title: 'Git', 
    content: 'Version system', 
    image: git},
];


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>

    <div >
      <Shop cards={techs}/>
    </div>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
