import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { FaRegClock } from 'react-icons/fa'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Post = (props) => {
  console.log(props);
  const {title,slug,image,company,date,detail} = props.frontmatter;
  
  return (
    <Wrapper>
      <section>
      <GatsbyImage image={getImage(image)} alt={title} className="img"/>
      
      </section>
      <section className="companyinfo">
        <div><h4>Role:Software Developer</h4></div>
        <div><h4>{company} | {date}</h4></div>
        <p>{detail}</p>
        <button><Link to={`/posts/${slug}`} className="link">Read More...</Link></button>
      </section>
      <section>
      <hr class="solid"/>

      </section>
    </Wrapper>
  )
}

const Wrapper = styled.article`
 display: grid;
 grid-template-columns: 1fr 5fr;
 grid-template-rows: auto;
  margin-bottom: 3rem;
  section {
    & .companyinfo {
      display: flex;
      flex-direction: column;
    }
  }

  section:last-child {
    grid-column: 1 / 3;
  }
  
  .info {
    text-align: center;
  }
  .img {
    margin-bottom: 1rem;
    height: 7rem;
    width: 10rem;
    padding: 2rem;
  }
  .category {
    display: inline-block;
    margin-bottom: 1rem;
    background: var(--clr-grey-10);
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
    font-weight: 700;
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
  }
  h3 {
    font-weight: 400;
    margin-bottom: 1rem;
    text-transform: initial;
  }
  .underline {
    width: 5rem;
    height: 1px;
    background: var(--clr-grey-9);
    margin: 0 auto;
    margin-bottom: 1rem;
  }
  p {
    color: var(--clr-grey-5);
    line-height: 1.8;
    font-size: .8rem;
  }
  hr.solid {
    border-top: 3px solid #bbb;
  }
  button {
    background-image: linear-gradient(to bottom right,lightgrey, black);
    color: white;
    font-size: 0.8rem;
    padding: .2rem;
    border-radius: 2rem;
    border-color: white;
    margin-bottom: 1rem;
    margin-left: 80%;
   
  }
  .link {
    text-transform: uppercase;
    letter-spacing: var(--spacing);
    font-weight: 200;
    font-size: .5rem;
    color: white;
    padding-bottom: 0.1rem;
    display: flex;
    align-items: center;
    svg {
      margin-left: 0.25rem;
      font-size: 0.8rem;
    }
  }
  .link:hover {
    color: black;
    text-shadow: 2px 2px 4px #000000;
  }
  footer {
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid var(--clr-grey-9);
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--clr-grey-5);

    & .date {
      display: flex;
      align-items: center;
      & .icon {
        color: var(--clr-primary-5);
        margin-right: 0.5rem;
      }
    }
  }
  @media (min-width: 600px) {
    .img {
      height: 20rem;
    }
  }
  @media (min-width: 800px) {
    .img {
      height: 7rem;
    }
  }
  @media (min-width: 992px) {
    & {
      display: grid;
      grid-template-columns: 1fr 5fr;
      column-gap: 1.5rem;
      .info {
        text-align: left;
      }
      .img {
        height: 7rem;
        max-height: 2rem;
        margin-top: 1rem;
      }
      .underline {
        margin-left: 0;
        margin-right: 0;
      }
    }
  }
`

export default Post
