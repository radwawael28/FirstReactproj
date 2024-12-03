import React from 'react'
import img1 from '../../assets/project-assets/img-1-C4nS0eD8.jpg';
import img2 from '../../assets/project-assets/img-2-D-4H1m4L.jpg';
import img3 from '../../assets/project-assets/img-3-pR2ZEVY9.jpg';
import img4 from '../../assets/project-assets/img-4-tHccITd-.jpg';
import img5 from '../../assets/project-assets/img-5-lAucr__a.jpg';
import img6 from '../../assets/project-assets/img-6-DFW03AZ3.jpg';
export default function Work() {
  return (
    <div className="col-md-10 about">
    <div className="container py-5  mt-lg-0 mt-3 d-lg-flex d-block flex-column justify-content-center ">
    <p className='abouttitle'>MY WORK</p>
    <h2 className='abouthead'>
    RECENT WORK
    </h2>
  
  <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Graphic Design</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Apps</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Software</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
    <div className="row projects">
      <div className="col-md-6">
        <img src={img1} alt="" />
      </div>
      <div className="col-md-6">
        <img src={img2} alt="" />
      </div>
      <div className="col-md-6">
        <img src={img3} alt="" />
      </div>
      <div className="col-md-6">
        <img src={img4} alt="" />
    </div>
      <div className="col-md-6">
        <img src={img5} alt="" />
      </div>
      <div className="col-md-6">
        <img src={img6} alt="" />
    </div>
  </div>
  </div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">  
     <div className="row projects">
      <div className="col-md-6">
        <img src={img1} alt="" />
      </div>
      <div className="col-md-6">
        <img src={img2} alt="" />
      </div>
      <div className="col-md-6">
        <img src={img3} alt="" />
      </div>
      <div className="col-md-6">
        <img src={img4} alt="" />
    </div>
      <div className="col-md-6">
        <img src={img5} alt="" />
      </div>
      <div className="col-md-6">
        <img src={img6} alt="" />
    </div>
  </div>
  </div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">   
    <div className="row projects">
      <div className="col-md-6">
        <img src={img1} alt="" />
      </div>
      <div className="col-md-6">
        <img src={img2} alt="" />
      </div>
      <div className="col-md-6">
        <img src={img3} alt="" />
      </div>
      <div className="col-md-6">
        <img src={img4} alt="" />
    </div>
      <div className="col-md-6">
        <img src={img5} alt="" />
      </div>
      <div className="col-md-6">
        <img src={img6} alt="" />
    </div>
  </div>
  </div>
    </div>
   </div>
  </div>
  )
}
