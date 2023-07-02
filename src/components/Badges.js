import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import './Badges.css';

export default function Badges() {
  return (
    <Box >
      <Grid container style={{ marginTop:"100px",display:"flex",justifyContent:"center", marginBottom:"200px"}} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        
          <Grid sx={{ display:"Column"}}item xs={2} sm={2} md={2} >
          <center><img textAlign={"center"} width={'100px'} height={'100px'} src={"./img/card1.png"}/></center>
            <Typography textAlign={'center'} variant='h4'>Finance</Typography>
            <Typography textAlign={'center'} xs={2} sm={2} md={2}>aPncididunt ut labore et dolor magna aliqbcjkn ksbcbcbjh gduwqndj wjkbdkb </Typography>
          </Grid>
          <Grid sx={{ display:"Column",alignItems:"center",justifyContent:"center"}}item xs={2} sm={2} md={2} >
          <center><img textAlign={"center"} width={'100px'} height={'100px'} src={"./img/card2.png"}/></center>
          <Typography textAlign={'center'} variant='h4'>Advice</Typography>
          <Typography textAlign={'center'}>aPncididunt ut labore et dolo magna aliqbcjkn k jnsckjds suhbchcbbjcj jd cjdjncjenjnc </Typography>

        </Grid><Grid sx={{ display:"Column",alignItems:"center",justifyContent:"center"}}item xs={2} sm={2} md={2} >
        <center><img textAlign={"center"} width={'100px'} height={'100px'} src={"./img/card3.png"}/></center>
        <Typography textAlign={'center'} variant='h4'>Consultancy</Typography>
        <Typography textAlign={'center'}>aPncididunt ut labore et dolor magna dgibdjeshcbsencnd cjkncnc jv jealiqbcjkn k jnsckjd</Typography>

      </Grid>
      </Grid>
    </Box>
  );
}
