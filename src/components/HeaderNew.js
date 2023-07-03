import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Image from 'mui-image';
import'./home.css' ;
import NavBarNew from './NavBarNew';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom:"0px",height:{xl:"100vh", xs:"85vh", sm:"85vh", lg:"90vh"},alignItems:"center" ,background: "linear-gradient(to right bottom, #262652, #94843A)"}}>
    <NavBarNew/>
      <Grid sx={{display:"flex", justifyContent:'space-around',marginTop:{xs:"65px", xl:'70px', md:'120px', lg:'40px'}, paddingLeft:{xs:'20px',sm:'20px',md:'80px', lg:'170px', xl:'170px'}, alignItems:"center"}}container style={{width: "calc(100% + 0px)"}} direction={{md:"row", sm:"column", xs:"column", lg:"row", xl:"row"}} spacing={-12} columns={16}>
        <Grid item xs={6}>
        <Typography style={{fontSize:'17px', color:'white', marginBottom:"20px"}}><span1>JKC  Softwares LLP </span1>keeps itself in the business of IT consultancy , software development, website and application development, and other relevant IT services to business and organizations.</Typography>

      <Stack spacing={2} sx={{display:"flex", alignItems:"center"}} direction={{md:"row", sm:"row", xs:"row", lg:"row", xl:"row"}}>
    
      <Button variant="none" sx={{height:"50px", width:"150px", backgroundColor: '#7d6e2aab', backgroundPositionY:"center", justifyContent:"center",alignItems:"center"}}> <Typography  style={{color:'white'}}>Get Started</Typography> </Button>
      
      </Stack>
        </Grid>
        <Grid item style={{marginRight:{md:'0px',lg:'20px',xl:'70px'}}} xs={8}>
          <Image style={{width:"100%",transitionProperty:'none', animation:'0ms'}}
         
          src="./img/vector.webp"/>
        </Grid>
      </Grid>
    </Box>
  );
}
