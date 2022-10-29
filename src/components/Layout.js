/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '../components/GlobalStyles';
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import { Container,Toolbar, Typography, Button, Box, Grid, Paper, Divider } from '@mui/material';



const Layout = ({ children }) => {
  
  return (
    <>
    <CssBaseline />
    <GlobalStyles />
    <div style={{'background-image': 'linear-gradient(to right, pink , pink)'}}>
    <Container maxWidth="xlg">
    <Box sx={{ bgcolor: 'white' }}>
    <div class="parent">
  

    
 



        <main>

     {children}
     </main>

      </div>
      </Box>
    </Container>
    
     
    </div>
    </>
  );
}

export default Layout
