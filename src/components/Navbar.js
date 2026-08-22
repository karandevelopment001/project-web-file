 import React from 'react'
 import logo  from './imgs/edited-photo.png'
import { Link } from 'react-router-dom'
import './pages/nav.css'



const Navbar = () => {
  return (
    
    <div className='navbhar'>
<div className='logobox'>
<img src={logo} alt=""  y
 />

<img src={Link} alt=""  y
 />
</div>
      <div className='navmanue'>
        <Link className='nav' to="/">Home</Link>
        <Link className='nav' to="/services">Services</Link>
        <Link className='nav' to="/gallery">Gallery</Link>
        <Link className='nav' to="/contact">Contact</Link>
        <Link className='nav' to="/plans">plans</Link> 
        <div className='icons'>
          <img className='icon'  src="https://tse2.mm.bing.net/th/id/OIP.yTfmU0X3eTo0-8HHWCCO7wHaHa?r=0&pid=ImgDet&w=474&h=474&rs=1&o=7&rm=3" alt="" />
          <img  className='icon' src="https://static.vecteezy.com/system/resources/previews/027/395/710/original/twitter-brand-new-logo-3-d-with-new-x-shaped-graphic-of-the-world-s-most-popular-social-media-free-png.png" alt="" />
          <img className='icon'  src="https://wallpapers.com/images/hd/facebook-logo-blue-circle-transparent-background-cym5k2139l3fd1eb-2.png" alt="" />
        </div>

        </div>  
       
    </div>
  )
}

export default Navbar