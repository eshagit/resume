import React from 'react';
import SocialLinks from '../constants/socialLinks';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Emptydata from './emptydata';
import {Chip,Stack,Box,Typography,Divider} from '@mui/material';
const Skills = () => {
  return (
    <Box sx={{display:'flex',flexDirection:'column'}}>
      <Box><AcUnitIcon sx={{ fontSize: 10 }}/><Typography component="span" variant="body2">Skills:</Typography></Box>
      <Box>Programming languages:</Box>
      <Box>Majorly used:</Box>
      <Stack direction="row" flexWrap='wrap'  spacing={1}>
        <Chip label="c" size="small" sx={{backgroundColor:'hsl(0,0%,30%)',color:'white'}}/>
        <Chip label="c++" size="small" sx={{backgroundColor:'hsl(0,0%,30%)',color:'white'}} />
        <Chip label="python" size="small" sx={{backgroundColor:'hsl(0,0%,30%)',color:'white'}} />
        <Chip label="TTCN3" size="small" sx={{backgroundColor:'hsl(0,0%,30%)',color:'white'}} />
        </Stack>
        <Box>Minorly used:</Box>
        <Stack direction="row" flexWrap='wrap' spacing={1}>
        <Chip label="QT/QML" size="small" sx={{backgroundColor:'hsl(0,0%,30%)',color:'white'}} />
        <Chip label="Gatsby" size="small" sx={{backgroundColor:'hsl(0,0%,30%)',color:'white'}} />
        <Chip label="HTML,css" size="small" sx={{backgroundColor:'hsl(0,0%,30%)',color:'white'}} />
        
        
      </Stack>
      <Divider dark />
      <Box>DB query languages/API:</Box>
      <Box>Majorly used:</Box>
      <Stack direction="row" flexWrap='wrap'  spacing={1}>
        <Chip label="sql" size="small" sx={{backgroundColor:'hsl(0,0%,30%)',color:'white'}} />
        <Chip label="plsql" size="small" sx={{backgroundColor:'hsl(0,0%,30%)',color:'white'}} />
      </Stack>
      <Box>Minorly used:</Box>
      <Stack direction="row" flexWrap='wrap'  spacing={1}>
        <Chip label="Graphql" size="small" sx={{backgroundColor:'hsl(0,0%,30%)',color:'white'}} />
        <Chip label="REST" size="small" sx={{backgroundColor:'hsl(0,0%,30%)',color:'white'}} />

        
      </Stack>
      <Divider dark />
      <Box>Cloud:</Box>
      <Stack direction="row"   spacing={.5}>
        <Chip label="DevOps" size="small" sx={{backgroundColor:'hsl(0,0%,30%)',color:'white'}} />
        <Chip label="GCP" size="small" sx={{backgroundColor:'hsl(0,0%,30%)',color:'white'}} />
        <Chip label="Docker" size="small" sx={{backgroundColor:'hsl(0,0%,30%)',color:'white'}} />
        <Chip label="Kubernetes(k8s,k3s)" size="small" sx={{backgroundColor:'hsl(0,0%,30%)',color:'white'}} />
        <Chip label="Firebase" size="small" sx={{backgroundColor:'hsl(0,0%,30%)',color:'white'}} />
        

        
      </Stack>
      <Divider dark />
      <Box>Tools:</Box>
      <Stack direction="row"  spacing={.5}>
        <Chip label="Git/clearcase/svn" size="small" sx={{backgroundColor:'hsl(0,0%,30%)',color:'white'}} />
  
        <Chip label="vim/vscode" size="small" sx={{backgroundColor:'hsl(0,0%,30%)',color:'white'}} />
        
        <Chip label="sql developer" size="small" sx={{backgroundColor:'hsl(0,0%,30%)',color:'white'}} />
        <Chip label="Linux" size="small" sx={{backgroundColor:'hsl(0,0%,30%)',color:'white'}} />
 
        
        

        
      </Stack>
      
      <Divider dark />
    
    </Box>
  )
}

export default Skills
