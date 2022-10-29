import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Banner from '../components/Banner'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
const PostTemplate = ({data}) => {
  console.log(data);
  const {mdx:{frontmatter:{slug,image,company,date},body}} = data;
  return (
    <Layout>

      <Wrapper>
        <div>{company} |  {date}</div>
        <div><GatsbyImage image={getImage(image)} alt={company} className="img"></GatsbyImage></div>
      
      
      </Wrapper>
      <MDXRenderer>{body}</MDXRenderer>
      
      
    
    </Layout>
    
  ); 
}

export const query= graphql`
  query SinglePostQuery($slug: String) {
    mdx(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        slug
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH,sizes: "200")
          }
        }
        company
        date
      }
      body
    }
  }
`



const Wrapper = styled.section`
  width: 85vw;
  max-width: 1100px;
  margin: 0 auto;
  margin-bottom: 4rem;
  .img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 15%;
    
  }
  .post-info {
    margin: 2rem 0 4rem 0;
    text-align: center;
    span {
      background: var(--clr-primary-5);
      color: var(--clr-white);
      border-radius: var(--radius);
      padding: 0.25rem 0.5rem;
      text-transform: uppercase;
      letter-spacing: var(--spacing);
    }
    h2 {
      margin: 1.25rem 0;
      font-weight: 400;
    }
    p {
      color: var(--clr-grey-5);
    }
    .underline {
      width: 5rem;
      height: 1px;
      background: var(--clr-grey-9);
      margin: 0 auto;
      margin-bottom: 1rem;
    }
  }
`

export default PostTemplate
