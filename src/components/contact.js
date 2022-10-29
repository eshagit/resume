import React from 'react';
import SocialLinks from '../constants/socialLinks';
import PlaceIcon from '@mui/icons-material/Place';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import EmailIcon from '@mui/icons-material/Email';
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';
import { Toolbar, Typography, Button, Box, Grid,Paper,Divider } from '@mui/material';
const Contact = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Resume_EshaMohideen.docx').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Resume_EshaMohideen.docx';
            alink.click();
        })
    })
}
  return (
    <div>
        <Box sx={{display:'flex',flexDirection:'row',alignItems: 'center' }}><PlaceIcon/><Typography variant="overline" display="block" gutterBottom sx={{ml:'5px'}}>Bangalore</Typography></Box>
        
        <Box sx={{display:'flex',flexDirection:'row',alignItems: 'center'}}><EmailIcon/><Typography variant="overline" display="block" gutterBottom sx={{ml:'5px'}}>eshamohideen1210@gmail.com</Typography></Box>
        <Box sx={{display:'flex',flexDirection:'row',alignItems: 'center'}}><ContactPhoneIcon/><Typography variant="overline" display="block" gutterBottom sx={{ml:'5px'}}>8050115233</Typography></Box>
        <Button variant="outlined" size="small" sx={{borderRadius:'10px',color:'gray'}} startIcon={<DownloadForOfflineOutlinedIcon sx={{color:'black',fontSize:'1px'}} />} onClick={onButtonClick}>
                    Download Resume
        </Button>
        </div>
  )
}

export default Contact
