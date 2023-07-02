import * as React from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';
import { Container } from '@mui/material';
import { wrap } from 'framer-motion';
class Carousel extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selectedFooter: 1,
    };
    this.settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: false,
      responsive: [
        {
          breakpoint: 320,
          settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false },
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 2, slidesToScroll: 2, infinite: false },
        },
        {
          breakpoint: 1024,
          settings: { slidesToShow: 3, slidesToScroll: 3, infinite: false },
        },
      ],
    };
  }

  render() {
    return (
      <div className="cont">
        <SimpleSlider settings={this.settings} />
      </div>
    );
  }
}

class SimpleSlider extends React.Component {

  shouldComponentUpdate(nextProps) {
  
        return false;
  }
  

  render() {
    
    console.log('slider render');
    return (
      <>
      <Typography variant="h4" style={{fontSize: '45px', marginTop:"50px",
      fontWeight: 'bold',
      color: 'hwb(49 14% 62%)',
      textAlign: 'center',
      textShadow: '2px 7px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)'}} gutterBottom>
    FEEDBACKS</Typography>

      <Slider {...this.props.settings}>
        
        <div>
          <div className="card1">
          
            <h4 style={{marginBottom:"10px"}}>Vihaan Mishra 1</h4>
            <svg  class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1vooibu-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
            <svg  class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1vooibu-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
            <svg  class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1vooibu-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
            <svg  class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1vooibu-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. specimen book.
            </p>
           
          </div>
        </div>
        <div>
          <div className="card1">
             <h4 style={{marginBottom:"10px"}}>Vihaan Mishra 1</h4>
            <svg  class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1vooibu-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
            <svg  class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1vooibu-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
            <svg  class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1vooibu-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
            <svg  class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1vooibu-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
            <svg  class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1vooibu-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. specimen book.
            </p>
          </div>
        </div>
        <div>
          <div className="card1">
          <h4 style={{marginBottom:"10px"}}>Vihaan Mishra 1</h4>
          <svg  class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1vooibu-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
          <svg  class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1vooibu-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
          <svg  class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1vooibu-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. specimen book. 
            </p>
          </div>
        </div>
        <div>
          <div className="card1">
          <h4 style={{marginBottom:"10px"}}>Vihaan Mishra 1</h4>
          <svg  class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1vooibu-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
          <svg  class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1vooibu-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
          <svg  class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1vooibu-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
          <svg  class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1vooibu-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
          <svg  class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1vooibu-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. specimen book.
            </p>
          </div>
        </div>
        <div>
          <div className="card1">
          <h4 style={{marginBottom:"10px"}}>Vihaan Mishra 1</h4>
          <svg  class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1vooibu-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
          <svg  class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1vooibu-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
          <svg  class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1vooibu-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
          <svg  class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1vooibu-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. specimen book. 
            </p>
          </div>
        </div>
        <div>
          <div className="card1">
          <h4 style={{marginBottom:"10px"}}>Vihaan Mishra 1</h4>
          <svg  class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1vooibu-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
          <svg  class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1vooibu-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
          <svg  class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1vooibu-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. specimen book.
            </p>
          </div>
        </div>

        <div>
        <div className="card1">
        <h4 style={{marginBottom:"10px"}}>Vihaan Mishra 1</h4>
        <svg  class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1vooibu-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
        <svg  class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1vooibu-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
        <svg  class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1vooibu-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
        <svg  class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1vooibu-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
        <svg  class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1vooibu-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. specimen book. It has survived not only five centuries, but also the leap into elec
            </p>
          </div>
        </div>
        

        <div>
        <div className="card1">
        <h4 style={{marginBottom:"10px"}}>Vihaan Mishra 1</h4>
        <svg  class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1vooibu-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
        <svg  class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1vooibu-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
        <svg  class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1vooibu-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
        <svg  class="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1vooibu-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. specimen book. It has survived not only five centuries, but also the leap into elec
            </p>
          </div>
        </div>

        <div>
        <div className="card1">
            <h4>Vihaan Mishra 9</h4>
            <Rating name="read-only" value={4} readOnly/>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. specimen book.
            </p>
          </div>
        </div>

        <div>
        <div className="card1">
       ...
          </div>
        </div>
      </Slider>
      </>
    );
    
  }
}

export default Carousel;