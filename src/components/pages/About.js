import React from 'react'
import img from './Mydata/img/image.png'

const About = () => {
  return (
  <section className="about-seaction">
      <div className="about-img" >
          <img src= {img}  alt="About us" />
           
      </div>
<div className='about-card'>
  <h2>About us</h2>
  <p>We Provide Professional and reliable Security Solutions 
    Designed to keep your business and People Safe 
  </p>
  <p>
    Our Experiencend team is committed to delivering trusted protection withmoden 
    tecnology
  </p>
<button>Learn More</button>
</div>
<div className='whyus'>
  <h2>Why Choose Us</h2>
  <p>
    Choose us or reliable 
    Professional and trusted Security 
    services
  </p>
</div>
<div className='feature'>
<div>
  <h3> • 10 years Experience</h3>
  <p>our Experience Team provides Professional Security Services</p>



<div className='feature'> 
  
  <h3> • 24/7 Support</h3>
  <p>we are available whenever
    you need our assistance.
  </p>
</div>


<div className='feature' >
  <h3>• Highly Trained</h3>
  <p>Our Trained Professionals Provide 
    reliable Protection
  </p>
</div>
</div>
</div>
<section className='services-seaction'>
  <div className='service-intero'>
    <h2>
      We Provide the  <br />
      Best Service
    </h2>
    <div className='main-service'>
      <div className='icon'>
        <img src= "" alt="" />

        <h3>Security camera</h3>
<p>Monitor your Property With Advanced Security
  Camera Systems and Reliable  Protecti
</p>
      </div>
    </div>
  </div>
</section>
  </section>

  )
}

export default About  