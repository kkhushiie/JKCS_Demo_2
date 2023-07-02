import * as React from "react";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";
import {GitHub,LinkedIn, Twitter} from "@mui/icons-material";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	
	<Container>	
		<Row>
		<Column>
			<Heading>Pages</Heading>
			<FooterLink href="#">FAQs</FooterLink>
			<FooterLink href="#">Client Portal</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Blogs & Insights</FooterLink>
            <FooterLink href="#">Portfolios</FooterLink>
            <FooterLink href="#">Case Studies</FooterLink>

		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Terms of Service</FooterLink>
			<FooterLink href="#">Industries Served</FooterLink>
			<FooterLink href="#">Resources & Downloads</FooterLink>
			<FooterLink href="#">Careers</FooterLink>
		</Column>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="../Teams/nav.html">Team</FooterLink>
			<FooterLink href="#">Awards and recognition</FooterLink>
			<FooterLink href="#">Partnerships</FooterLink>
			<FooterLink href="#">Certifications</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">Address</FooterLink>
			<FooterLink href="#">Phone Number</FooterLink>
			<FooterLink href="#">Email</FooterLink>
            <FooterLink style={{marginTop:"40px"}} href="#"><Button style={{BackgroundColor:"#94843A"}} startIcon={<SendIcon sx={{ color: "white" }} />}sx={{backgroundColor:"#94843A", fontSize:"12px" ,FlexDirection:"row" ,width:"120px"}} variant="none">Mail Us</Button></FooterLink>

           
		</Column>
       
		</Row>
       
        <Row style={{display: "flex", padding:"20px" , marginRight:"10px",flexDirection:"row-reverse"}} >
       
        <Column style={{marginLeft: "3px"}}><Link href="#" style={{color: '#f5f5f5', hover:"color"}}><Twitter/></Link></Column>
        <Column style={{marginLeft: "3px"}}><Link href="#" style={{color: '#f5f5f5'}} sx={{ pl: 1, pr: 1 }}><GitHub/></Link></Column>
        <Column style={{marginLeft: "3px"}}><Link href="#" style={{color: '#f5f5f5'}}><LinkedIn/></Link></Column>
        </Row>
        <Stack>
          
        </Stack>
	</Container>
	</Box>
   

);
};
export default Footer;
