import React from 'react'
import Slider from "react-slick";
export default function Home() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
  };
  return (
    
          
    <div className="col-md-10 p-0">
      <div id="carouselExampleSl" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
  <Slider {...settings}>
      <div>
       
    <div class="carousel-item active">
      <img class="d-block w-100 first img-fluid position-relative" />
    <div className="home-text text-center text-lg-start ">
      <h1>Hi! <br/> Im Jackson</h1>
      <p class="text-lg-start text-center ">100% html5 bootstrap templates Made <br/> By <a href="https://colorlib.com/">Colorlib.com</a></p>
      <button type="button"  >DOWNLOAD CV <i class="fa-solid fa-download"></i></button>
    </div>
    </div>
      </div>
      <div>
      <div class="carousel-item active">
    <img class="d-block w-100 second img-fluid position-relative" />
    <div className="home-text text-center text-lg-start  ">
      <h1>I am <br/> a Designer</h1>
      <p class="text-lg-start text-center">100% html5 bootstrap templates Made <br/> By <a href="https://colorlib.com/">Colorlib.com</a></p>
      <button type="button"  > VIEW PORTFOLIO  <i class="fa-solid fa-download"></i></button>
    </div>
    </div>
      </div>
    
    </Slider>
  
  
   
  </div>
</div>


</div>
  
  
  )
}

