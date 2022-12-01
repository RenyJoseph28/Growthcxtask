import React from 'react'
import Navebar from './Navebar'
import './index.css';



const Home = () => {
  return (
    
    <div>
        <Navebar/>
     <div className='container'>
        <div className='row'>
        
          <div className='col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
            <h1 className='heading'>Make</h1>
            <h1 className='head'>remote work</h1>
            <p className='p1'>Get your team in sync,no matter your location.</p>
            <p className='p2'> Streamline processes, create team rituals,and</p>
            <p className='p3'>watch productivity soar.</p>
            <button className='btn btn-dark'>Learn more</button>
            <div>
            <img src='./images/client-databiz.svg'alt='image1' className='img1'/>
            <img src='./images/client-audiophile.svg' alt='image2' className='img2'/>
            <img src='./images/client-meet.svg' alt='image3' className='img3'/>
            <img src='./images/client-maker.svg' alt='image4' className='img4'/>
            
            </div>
            </div>
            <div className="main" >
            <div className='col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
           
           <img src="./images/image-hero-desktop.png" alt='hero' className='img-fluid'  /></div>

       </div>
            
          

          
        </div>
        </div>   

    </div>
  )
}

export default Home