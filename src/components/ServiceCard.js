import React from 'react';
import Typography from '@mui/material/Typography';
import './ServiceCard.css';
const ServiceCard = () => {  
    return (
        <>
        <Typography variant="h4" style={{fontSize: '45px', marginTop:"50px",
        fontWeight: 'bold',
        color: 'hwb(49 14% 62%)',
        textAlign: 'center',
        textShadow: '2px 7px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)'}} gutterBottom>
      OUR SERVICES</Typography>

      <div className="contain">    
        <div className="cards">
          <div className="card-item">
          <img className="card-image" src='https://img.freepik.com/free-psd/business-people-discussing-documents-ideas-meeting-with-smartphone-isolated-background-businesswoman-having-idea-business-technology-concept-3d-render-cartoon-character_1150-61993.jpg' alt='...'/>
            <div className="card-info">
              <h2 className="card-title">IT Consultancy</h2>
              <p className="card-intro">Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros.Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros.</p>
            </div>
          </div>
        </div>
        
        {/*card-2*/}
        <div className="cards">
        <div className="card-item">
        <img className="card-image" src='https://img.freepik.com/free-psd/3d-illustration-man-flying-catch-golden-coin-business-graph-rendering_1150-53663.jpg' alt='...' />
        <div className="card-info">
            <h2 className="card-title">Development</h2>
            <p className="card-intro">Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros.Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros.</p>
          </div>
        </div>
      </div>
        {/*card-3*/}
        <div className="cards">
        <div className="card-item">
        <img className="card-image" src='https://t4.ftcdn.net/jpg/03/09/43/45/360_F_309434585_5io0aZoLz4MFhoWqOS0Ch42yWedZgamc.jpg' alt='...' />
        <div className="card-info">
            <h2 className="card-title">Business</h2>
            <p className="card-intro">Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros.Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros.</p>
          </div>
        </div>
      </div>

      </div>
      </>
    );
  };
  
export default ServiceCard;
