import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';

import Layout from '../components/Layout'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'
import GlobalStyles from '../components/GlobalStyles';
import { Fade } from 'react-reveal';

import Header from '../components/Header';
import Hero from '../components/Hero';
import { Container, Toolbar, Typography, Button, Box, Grid, Paper, Divider } from '@mui/material';
import Contact from '../components/contact';
import Skills from '../components/Skills';
import ProfileSum from '../components/ProfileSum';
import Certification from '../components/Certification';
import Education from '../components/Education';



const IndexPage = ({ data }) => {
  console.log(data);
  const { allMdx: { nodes: postsdata } } = data;
  return (

    <>
      {/* <CssBaseline />
    <GlobalStyles />
    <div style={{'background-image': 'linear-gradient(to right, pink , pink)'}}>
    <Container maxWidth="xlg">
    <Box sx={{ bgcolor: 'white', height: '100vh' }}> */}
      {/* <div className="App"> */}

      <Layout>
        <Grid container spacing={2}>

          <Grid item xs={12} >
            <Fade top duration={1000} distance="40px">

              <div className="container">
                <Header />
              </div>

              <Hero />

              <Box sx={{ height: '10px', backgroundColor: 'rgba(192,192,192,0.3)' }}></Box>
              {/* <Divider dark /> */}
            </Fade>
          </Grid>

          <Grid item xs={12} md={4} sx={{ border: '10px solid rgba(192,192,192,0.3)' }}>

            <Grid container spacing={2}>

              <Grid item xs={12}>
                <Skills />
              </Grid>
              <Grid item xs={12}>
                <Certification />
              </Grid>
              <Grid item xs={12}>
                <Education />
              </Grid>
            </Grid>





          </Grid>
          <Grid item xs={12} md={8} sx={{ border: '10px solid rgba(192,192,192,0.3)' }}>
            <Grid item xs={12} sx={{ border: '5px solid rgba(192,192,192,0.3)' }}>
              <ProfileSum />
            </Grid>
            <Grid item xs={12} sx={{ border: '5px solid rgba(192,192,192,0.3)' }}>
              <h4>Work Summary:</h4>
              <Posts posts={postsdata} title="" />
            </Grid>

          </Grid>
        </Grid>

      </Layout>
      {/* </div> */}

      {/* </Box>
    </Container>
    
     
    </div> */}
    </>




  );
}

export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___company, order: DESC}) {
      nodes {
        frontmatter {
          company
          date
          slug
          title
          detail
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
export default IndexPage

export function Head() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Dekko&display=swap" rel="stylesheet" />
      <title>Esha Resume</title>
    </>
  )
}
