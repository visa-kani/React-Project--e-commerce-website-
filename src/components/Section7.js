import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import React,{Component} from 'react';   
import Container from 'react-bootstrap/esm/Container';
import blog1 from '../images/blog-1.jpg'
import blog2 from '../images/blog-2.jpg'
import blog3 from '../images/blog-3.jpg'
import blog4 from '../images/blog-4.jpg'
import blog5 from '../images/blog-5.jpg'
import blog6 from '../images/blog-6.jpg'



class Owldemo1 extends Component {  
        render()  
        {  
          return (  
            <div>  
              <Container >
              <div className="banner-txt1 txt-black f-s">our <span className="banner-txt1 txt-orange f-s"> blogs</span> </div>
              </Container>
       <div class='container' >            
        <OwlCarousel items={3}  
          className="owl-theme"  
          loop  
          nav  
          margin={8} >  
           <div ><img  className="img" src= {blog1} alt='images'/></div>  
           <div><img  className="img" src= {blog2} alt='images'/></div>  
           <div><img  className="img" src= {blog3} alt='images'/></div>  
           <div><img  className="img" src= {blog4} alt='images'/></div>  
           <div><img className="img" src= {blog5} alt='images'/></div>  
           <div><img className="img" src= {blog6} alt='images'/></div>  
      </OwlCarousel>  
      </div>  
  
      </div>  
          )  
        }  
      }  
        
  
export default Owldemo1