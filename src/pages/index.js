import React from 'react'
import { Link } from 'gatsby'
import icon from '../images/gatsby-icon.png'
import Layout from '../components/layout'
import styled from 'styled-components'
const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  color: palevioletred;
`;
 const Image = styled.img`
height: 500px;

display: block;

    margin-left: auto;
    margin-right: auto;
    width: 100%;
 `


const IndexPage = () => (
  <Layout>
    <Title>Hi people</Title>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Image src={icon} alt='this is an image' />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)






export default IndexPage
