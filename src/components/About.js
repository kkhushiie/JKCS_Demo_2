import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './about.css';
export default function About() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div style={{  backgroundColor: "#343444" }}>
      <Container >
     

      <Typography style={{fontSize: '45px', textShadow: '2px 7px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(0,0,0,0.3)'}} variant="h4" color={'white'} align='center' padding={'40px'} paddingTop={'90px'} gutterBottom>
      WE DON'T PROMISE, WE GURANTEE</Typography>
      <Typography variant="body2" color={'white'} font-style= 'normal' fontSize= {'25px'}
      lineHeight= {"42px"}
      letterSpacing= {'0.01em'} align='justify' paddingBottom={'35px'} marginBottom={'0px'} gutterBottom>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlaborum sed eiusmod tempor tempor incididunt utlaborum sed eiusmod tempor tempor inci sed incididunt eiusmod incididunt tempor incididunt utlaborumsed do eiusmod tempor incididunt utlaborum.
      </Typography>
      <Stack justifyContent={"Center"} direction="row" paddingBottom="70px"  spacing={2}>
      <Button sx={{backgroundColor:"#94843A", color:"white", height:'50px',fontWeight:"600" ,borderRadius:"5px"}} variant="none" href="#contained-buttons">
         View More
      </Button>
      <Button sx={{backgroundColor:"#94843A", color:"white", height:'50px',fontWeight:"600" ,borderRadius:"5px"}} variant="none" href="#contained-buttons">
        Contact Us
      </Button>
    </Stack>
    </Container>
    </div>
    </React.Fragment>
  );
}