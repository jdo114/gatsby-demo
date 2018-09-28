import React from 'react'
import { Link } from 'gatsby'
import icon from '../images/bbcutie-logo.png'
import Layout from '../components/layout'
import styled from 'styled-components'

const FlexCon = styled.div`
@import url('https://fonts.googleapis.com/css?family=PT+Sans+Caption');
font-family: "PT Sans Caption", sans-serif;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
font-size: 1.5rem;


`

const RowFlex = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 30rem;

`

const Excl = styled.div`
padding: 16px;
width:10rm;
`

const SpanTag = styled.span`
padding: 16px;
margin-top: 2rem;
display: inline-block;
color: rgb(255, 255, 255);
background: rgb(199, 4, 4);

border-radius: 50px;
`
const GetToKnow = styled.a`
display: inline-block;
position: relative;
color: rgb(17, 17, 17);
font-weight: bold;
overflow: hidden;
text-decoration: none;
padding: 10px 15px;
border-width: 1px;
border-style: solid;
border-color: rgb(170, 170, 170);
border-image: initial;
border-radius: 50px 0px   0px 50px;
`
const ReadStory = styled.a`


display: inline-block;
position: relative;
color: rgb(17, 17, 17);
font-weight: bold;
overflow: hidden;
text-decoration: none;
padding: 10px 15px;
border-width: 1px;
border-style: solid;
border-color: rgb(170, 170, 170);
border-image: initial;
border-radius: 0px 50px   50px 0px;

`

const Title = styled.h1`
color: rgb(17, 17, 17);
font-size: 2.2em;
margin: 0.67em 0px;

`;


const Pix = styled.div`
padding: 10px;

`

const Pad = styled.div`

`

const Divcon2 = styled.div`

display: block;

`
const Divcon = styled.div`

display: block;

`

const Pstyle = styled.p`

display: flex;
-webkit-box-align: center;
align-items: center;
flex-direction: column;
text-align: center;
padding: 1rem;
line-height: 1.4;
`;
 const Image = styled.img`
height: 17rem;

display: block;

    margin-left: auto;
    margin-right: auto;
    width: 35rem;
    text-align: center;
 `

 

const IndexPage = () => (
  <Layout>
<FlexCon>
  <Pix>
          <Image src={icon} alt='this is an image' />
  </Pix>
<Excl>
  <SpanTag>Exclusive</SpanTag>
</Excl>
<Pad>
      <Title>BOLD FLAVORS. SERIOUSLY SMOKED MEATS.™  </Title>
</Pad>      
  <Divcon2>
    <Pstyle>For over 65 years of great food, friendly faces, and quick casual service, Bar-B-Cutie® SmokeHouse is second to none! We pride ourselves on the quality of our cooking, the contentment of our guests, and the continuity of our business. 
<br></br>
  So when you have that familiar craving for a mouth-waterin’ meal, you need to Get Your Booty To Bar-B-Cutie!</Pstyle>
  </Divcon2>
<RowFlex>
  <GetToKnow>Get To Know Us</GetToKnow>
  <ReadStory>Read Our Story</ReadStory>
</RowFlex>
</FlexCon>
  </Layout>
)






export default IndexPage
